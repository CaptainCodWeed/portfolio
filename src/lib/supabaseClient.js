import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vvizajwstryjqmsdkguu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2aXphandzdHJ5anFtc2RrZ3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMzEwMjIsImV4cCI6MjA3MDkwNzAyMn0.q5b05OoGnK9_ilHOjg7JVfVjBvjvrlZVfw8YIv3jVHM";

export const supabase = createClient(supabaseUrl, supabaseKey);
