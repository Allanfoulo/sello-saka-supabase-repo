import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pencil, Trash2, Plus, Upload, Loader2 } from "lucide-react";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image_url: string;
    linkedin_url: string | null;
    email: string | null;
    status: string;
    created_at: string;
}

const TeamsTab = () => {
    const [teams, setTeams] = useState<TeamMember[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        bio: "",
        image_url: "",
        linkedin_url: "",
        email: "",
    });
    const { toast } = useToast();

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        const { data, error } = await supabase
            .from("teams")
            .select("*")
            .order("created_at", { ascending: true });

        if (error) {
            toast({
                title: "Error",
                description: "Failed to fetch team members",
                variant: "destructive",
            });
            return;
        }

        setTeams(data || []);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            if (!e.target.files || e.target.files.length === 0) {
                return;
            }

            const file = e.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('team-images')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data } = supabase.storage
                .from('team-images')
                .getPublicUrl(filePath);

            setFormData({ ...formData, image_url: data.publicUrl });
            toast({
                title: "Success",
                description: "Image uploaded successfully",
            });
        } catch (error) {
            console.error("Upload error:", error);
            toast({
                title: "Error",
                description: "Error uploading image",
                variant: "destructive",
            });
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const teamData = {
            name: formData.name,
            role: formData.role,
            bio: formData.bio,
            image_url: formData.image_url,
            linkedin_url: formData.linkedin_url || null,
            email: formData.email || null,
            status: "active",
        };

        if (editingId) {
            const { error } = await supabase
                .from("teams")
                .update(teamData)
                .eq("id", editingId);

            if (error) {
                toast({
                    title: "Error",
                    description: "Failed to update team member",
                    variant: "destructive",
                });
                return;
            }

            toast({
                title: "Success",
                description: "Team member updated successfully",
            });
        } else {
            const { error } = await supabase.from("teams").insert(teamData);

            if (error) {
                toast({
                    title: "Error",
                    description: "Failed to add team member",
                    variant: "destructive",
                });
                return;
            }

            toast({
                title: "Success",
                description: "Team member added successfully",
            });
        }

        setShowForm(false);
        resetForm();
        fetchTeams();
    };

    const handleEdit = (member: TeamMember) => {
        setEditingId(member.id);
        setFormData({
            name: member.name,
            role: member.role,
            bio: member.bio,
            image_url: member.image_url,
            linkedin_url: member.linkedin_url || "",
            email: member.email || "",
        });
        setShowForm(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this team member?")) return;

        const { error } = await supabase.from("teams").delete().eq("id", id);

        if (error) {
            toast({
                title: "Error",
                description: "Failed to delete team member",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Success",
            description: "Team member deleted successfully",
        });
        fetchTeams();
    };

    const resetForm = () => {
        setEditingId(null);
        setFormData({
            name: "",
            role: "",
            bio: "",
            image_url: "",
            linkedin_url: "",
            email: "",
        });
    };

    return (
        <Card className="bg-white">
            <CardHeader>
                <CardTitle className="text-navy-primary flex justify-between items-center">
                    <span>Team Management</span>
                    <Dialog open={showForm} onOpenChange={(open) => {
                        setShowForm(open);
                        if (!open) resetForm();
                    }}>
                        <DialogTrigger asChild>
                            <Button className="bg-gold-600 hover:bg-gold-400 text-navy-primary">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Team Member
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                            <DialogHeader>
                                <DialogTitle>{editingId ? "Edit Team Member" : "Add Team Member"}</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Name</Label>
                                        <Input
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label>Role</Label>
                                        <Input
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label>Bio</Label>
                                    <Textarea
                                        value={formData.bio}
                                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                        required
                                        className="h-24"
                                    />
                                </div>

                                <div>
                                    <Label>Image</Label>
                                    <div className="flex gap-4 items-center mt-2">
                                        {formData.image_url && (
                                            <img
                                                src={formData.image_url}
                                                alt="Preview"
                                                className="w-16 h-16 rounded-full object-cover border border-gray-200"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    disabled={uploading}
                                                    className="cursor-pointer"
                                                />
                                                {uploading && <Loader2 className="w-4 h-4 animate-spin text-gold-600" />}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Upload an image from your device. It will be automatically saved.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Hidden input to store the URL for form submission */}
                                    <Input
                                        type="hidden"
                                        value={formData.image_url}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>LinkedIn URL (Optional)</Label>
                                        <Input
                                            value={formData.linkedin_url}
                                            onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label>Email (Optional)</Label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gold-600 hover:bg-gold-400 text-navy-primary"
                                    disabled={uploading}
                                >
                                    {uploading ? "Uploading Image..." : (editingId ? "Update Member" : "Add Member")}
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teams.map((member) => (
                                <TableRow key={member.id}>
                                    <TableCell>
                                        <img
                                            src={member.image_url}
                                            alt={member.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">{member.name}</TableCell>
                                    <TableCell>{member.role}</TableCell>
                                    <TableCell>
                                        <Badge className="bg-green-500">
                                            {member.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handleEdit(member)}
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="destructive"
                                                onClick={() => handleDelete(member.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {teams.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                                        No team members found. Add one to get started.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

export default TeamsTab;
