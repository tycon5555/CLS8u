// -----------------------------
// Supabase Setup
// -----------------------------
const SUPABASE_URL = "https://sygyjczuagaifdinjivd.supabase.co";
const SUPABASE_ANON_KEY = "sb-publishable_Nn-iEz0XfUV-oRwpfkXBaA_eMcdnRSM";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// -----------------------------
// Google Login
// -----------------------------
async function googleLogin() {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://semicrypto.net/exchange.html"
    }
  });

  if (error) {
    console.log("Google Login Error:", error.message);
    alert("Google login failed. Check console.");
  }
}

// -----------------------------
// Email Login (Optional)
// -----------------------------
async function emailLogin() {
  const email = document.getElementById("emailInput").value;

  if (!email) return alert("Enter your email");

  const { error } = await supabaseClient.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: "https://semicrypto.net/exchange.html"
    }
  });

  if (error) alert(error.message);
  else alert("Check your email for login link!");
}
