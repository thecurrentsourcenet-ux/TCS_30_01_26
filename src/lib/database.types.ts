export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string
          title: string
          content: string
          summary: string
          source_url: string
          image_url: string | null
          category: string
          region: string
          published_at: string
          created_at: string
          updated_at: string
          ai_summary: string | null
          source_name: string
          author: string | null
          read_time: number
          likes_count: number
          views_count: number
          is_premium: boolean
          tags: string[]
        }
        Insert: {
          id?: string
          title: string
          content: string
          summary: string
          source_url: string
          image_url?: string | null
          category: string
          region: string
          published_at: string
          created_at?: string
          updated_at?: string
          ai_summary?: string | null
          source_name: string
          author?: string | null
          read_time?: number
          likes_count?: number
          views_count?: number
          is_premium?: boolean
          tags?: string[]
        }
        Update: {
          id?: string
          title?: string
          content?: string
          summary?: string
          source_url?: string
          image_url?: string | null
          category?: string
          region?: string
          published_at?: string
          created_at?: string
          updated_at?: string
          ai_summary?: string | null
          source_name?: string
          author?: string | null
          read_time?: number
          likes_count?: number
          views_count?: number
          is_premium?: boolean
          tags?: string[]
        }
        Relationships: []
      }
      article_likes: {
        Row: {
          id: string
          article_id: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          article_id: string
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          article_id?: string
          user_id?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_likes_article_id_fkey"
            columns: ["article_id"]
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      article_views: {
        Row: {
          id: string
          article_id: string
          user_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          article_id: string
          user_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          article_id?: string
          user_id?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_views_article_id_fkey"
            columns: ["article_id"]
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_views_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      comments: {
        Row: {
          id: string
          article_id: string
          user_id: string
          content: string
          parent_id: string | null
          likes_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          article_id: string
          user_id: string
          content: string
          parent_id?: string | null
          likes_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          article_id?: string
          user_id?: string
          content?: string
          parent_id?: string | null
          likes_count?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_article_id_fkey"
            columns: ["article_id"]
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          company: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          company?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          company?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions: {
        Row: {
          id: string
          email: string
          created_at: string
          status: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          status?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          status?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          id: string
          user_id: string
          categories: string[]
          regions: string[]
          followed_topics: string[]
          email_frequency: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          categories?: string[]
          regions?: string[]
          followed_topics?: string[]
          email_frequency?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          categories?: string[]
          regions?: string[]
          followed_topics?: string[]
          email_frequency?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_preferences_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      user_subscriptions: {
        Row: {
          id: string
          user_id: string
          status: string
          plan: string
          current_period_end: string
          cancel_at_period_end: boolean
          stripe_subscription_id: string
          stripe_customer_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          status: string
          plan: string
          current_period_end: string
          cancel_at_period_end?: boolean
          stripe_subscription_id: string
          stripe_customer_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          status?: string
          plan?: string
          current_period_end?: string
          cancel_at_period_end?: boolean
          stripe_subscription_id?: string
          stripe_customer_id?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}