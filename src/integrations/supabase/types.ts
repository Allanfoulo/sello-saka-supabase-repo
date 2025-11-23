export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      applications: {
        Row: {
          address: string | null
          consent: boolean | null
          created_at: string | null
          current_challenges: string | null
          date_of_birth: string | null
          diagnosis_details: string | null
          email: string
          guardian_name: string | null
          id: string
          phone: string
          programs_interested: string[] | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          survivor_name: string | null
          treatment_details: string | null
        }
        Insert: {
          address?: string | null
          consent?: boolean | null
          created_at?: string | null
          current_challenges?: string | null
          date_of_birth?: string | null
          diagnosis_details?: string | null
          email: string
          guardian_name?: string | null
          id?: string
          phone: string
          programs_interested?: string[] | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          survivor_name?: string | null
          treatment_details?: string | null
        }
        Update: {
          address?: string | null
          consent?: boolean | null
          created_at?: string | null
          current_challenges?: string | null
          date_of_birth?: string | null
          diagnosis_details?: string | null
          email?: string
          guardian_name?: string | null
          id?: string
          phone?: string
          programs_interested?: string[] | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          survivor_name?: string | null
          treatment_details?: string | null
        }
        Relationships: []
      }
      competition_entries: {
        Row: {
          competition_id: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          phone: string
          proof_of_payment_url: string | null
          status: string | null
        }
        Insert: {
          competition_id?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          phone: string
          proof_of_payment_url?: string | null
          status?: string | null
        }
        Update: {
          competition_id?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          phone?: string
          proof_of_payment_url?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "competition_entries_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
        ]
      }
      competitions: {
        Row: {
          created_at: string | null
          description: string
          end_date: string
          ticket_price: number
          id: string
          image_url: string | null
          status: string | null
          prize: string | null
          second_prize: string | null
          third_prize: string | null
          start_date: string
          title: string
          max_tickets: number | null
          winner_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          end_date: string
          ticket_price: number
          id?: string
          image_url?: string | null
          status?: string | null
          prize?: string | null
          second_prize?: string | null
          third_prize?: string | null
          start_date: string
          title: string
          max_tickets?: number | null
          winner_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          end_date?: string
          ticket_price?: number
          id?: string
          image_url?: string | null
          status?: string | null
          prize?: string | null
          second_prize?: string | null
          third_prize?: string | null
          start_date?: string
          title?: string
          max_tickets?: number | null
          winner_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          message: string
          phone: string | null
          read: boolean | null
          subject: string
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          last_name: string
          message: string
          phone?: string | null
          read?: boolean | null
          subject: string
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          message?: string
          phone?: string | null
          read?: boolean | null
          subject?: string
        }
        Relationships: []
      }
      donations: {
        Row: {
          amount: number
          created_at: string | null
          donor_id: string | null
          id: string
          payment_method: string
          payment_status: string
          transaction_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          donor_id?: string | null
          id?: string
          payment_method: string
          payment_status?: string
          transaction_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          donor_id?: string | null
          id?: string
          payment_method?: string
          payment_status?: string
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donations_donor_id_fkey"
            columns: ["donor_id"]
            isOneToOne: false
            referencedRelation: "donors"
            referencedColumns: ["id"]
          },
        ]
      }
      donors: {
        Row: {
          created_at: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          phone: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          last_name: string
          phone?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
        }
        Relationships: []
      }
      impact_metrics: {
        Row: {
          created_at: string | null
          icon: string
          id: string
          label: string
          updated_at: string | null
          value: string
        }
        Insert: {
          created_at?: string | null
          icon: string
          id?: string
          label: string
          updated_at?: string | null
          value: string
        }
        Update: {
          created_at?: string | null
          icon?: string
          id?: string
          label?: string
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      impact_stories: {
        Row: {
          category: string | null
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          impact_summary: string | null
          is_active: boolean | null
          quote: string | null
          quote_author: string | null
          title: string
        }
        Insert: {
          category?: string | null
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          impact_summary?: string | null
          is_active?: boolean | null
          quote?: string | null
          quote_author?: string | null
          title: string
        }
        Update: {
          category?: string | null
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          impact_summary?: string | null
          is_active?: boolean | null
          quote?: string | null
          quote_author?: string | null
          title?: string
        }
        Relationships: []
      }
      teams: {
        Row: {
          bio: string | null
          created_at: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          linkedin_url: string | null
          email: string | null
          name: string
          role: string
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          linkedin_url?: string | null
          email?: string | null
          name: string
          role: string
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          linkedin_url?: string | null
          email?: string | null
          name?: string
          role?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          user_id: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
    PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
    PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof PublicSchema["CompositeTypes"]
  | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
  ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never
