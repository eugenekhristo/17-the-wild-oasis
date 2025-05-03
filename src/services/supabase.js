import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://lphlyevswrnzclhgueyf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwaGx5ZXZzd3JuemNsaGd1ZXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NDg4MzgsImV4cCI6MjA2MTUyNDgzOH0.LkIMbgsmQ_WstLXinOFTfq2-_frC0mSnbm8YRDZDe1A';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
