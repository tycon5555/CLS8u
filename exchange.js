// Supabase client again
const SUPABASE_URL = "https://sygyjczuagaifdinjivd.supabase.co";
const SUPABASE_ANON_KEY = "sb-publishable_Nn-iEz0XfUV-oRwpfkXBaA_eMcdnRSM";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// -----------------------------
// Session Check
// -----------------------------
async function loadUser() {
  const { data } = await supabaseClient.auth.getSession();

  if (!data.session) {
    window.location.href = "/index.html";
    return;
  }

  document.getElementById("email").textContent =
    "Logged in as: " + data.session.user.email;
}

loadUser();

// -----------------------------
// Logout
// -----------------------------
async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "/index.html";
}
