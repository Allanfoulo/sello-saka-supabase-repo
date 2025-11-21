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
          id: string
          name: string
          phone: string
          proof_of_payment_url: string | null
          status: string | null
          ticket_number: string | null
        }
        Insert: {
          competition_id?: string | null
          created_at?: string | null
          email: string
          id?: string
          name: string
          phone: string
          proof_of_payment_url?: string | null
          status?: string | null
          ticket_number?: string | null
        }
        Update: {
          competition_id?: string | null
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          phone?: string
          proof_of_payment_url?: string | null
          status?: string | null
          ticket_number?: string | null
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
          id: string
          max_tickets: number | null
          prize: string
          start_date: string
          status: string | null
          ticket_price: number
          title: string
          updated_at: string | null
          winner_id: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          end_date: string
          id?: string
          max_tickets?: number | null
          prize: string
          start_date: string
          status?: string | null
          ticket_price: number
          title: string
          updated_at?: string | null
          winner_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          end_date?: string
          id?: string
          max_tickets?: number | null
          prize?: string
          start_date?: string
          status?: string | null
          ticket_price?: number
          title?: string
          updated_at?: string | null
          winner_id?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          id: string
          message: string
          name: string
          phone: string | null
          subject: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          name: string
          phone?: string | null
          subject: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          subject?: string
        }
        Relationships: []
      }
      donations: {
        Row: {
          amount: number
          created_at: string
          donation_type: string
          email: string
          id: string
          name: string
          payment_method: string | null
          phone: string | null
          status: string
        }
        Insert: {
          amount: number
          created_at?: string
          donation_type: string
          email: string
          id?: string
          name: string
          payment_method?: string | null
          phone?: string | null
          status?: string
        }
        Update: {
          amount?: number
          created_at?: string
          donation_type?: string
          email?: string
          id?: string
          name?: string
          payment_method?: string | null
          phone?: string | null
          status?: string
        }
        Relationships: []
      }
      donors: {
        Row: {
          amount: number
          created_at: string | null
          donation_type: string | null
          email: string
          id: string
          name: string
          payment_method: string | null
          phone: string | null
          status: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          donation_type?: string | null
          email: string
          id?: string
          name: string
          payment_method?: string | null
          phone?: string | null
          status?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          donation_type?: string | null
          email?: string
          id?: string
          name?: string
          payment_method?: string | null
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      impact_metrics: {
        Row: {
          created_at: string | null
          id: string
          metric_name: string
          metric_type: string | null
          metric_value: number
          updated_at: string | null
          year: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metric_name: string
          metric_type?: string | null
          metric_value: number
          updated_at?: string | null
          year?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metric_name?: string
          metric_type?: string | null
          metric_value?: number
          updated_at?: string | null
          year?: number | null
        }
        Relationships: []
      }
      teams: {
        Row: {
          bio: string
          created_at: string
          email: string | null
          id: string
          image_url: string
          linkedin_url: string | null
          name: string
          role: string
          status: string
        }
        Insert: {
          bio: string
          created_at?: string
          email?: string | null
          id?: string
          image_url: string
          linkedin_url?: string | null
          name: string
          role: string
          status?: string
        }
        Update: {
          bio?: string
          created_at?: string
          email?: string | null
          id?: string
          image_url?: string
          linkedin_url?: string | null
          name?: string
          role?: string
          status?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id?: string
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
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
    DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
    DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema["Enums"]
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema["CompositeTypes"]
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
