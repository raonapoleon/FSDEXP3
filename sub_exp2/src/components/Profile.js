

function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>

            <img
        src="/me.png" 
        alt="My Profile"
        width="150"
        height="150"
      />

      <p><b>Name :</b> Priyanshu Yadav</p>
      <p><b>UID :</b> 23BAI70282</p>

      <h3>Projects:</h3>
      <ul>
        <li>RBAC</li>
        <li>Bitcoin Price Prediction</li>
        <li>AI Chatbot</li>
      </ul>
    </div>
  );
}

export default Profile;
