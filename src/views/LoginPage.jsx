import React from "react";

function LoginPage() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="email"
        />
        <input
          type="text"
          placeholder="password"
        />
        <button type="button">
          LogIn
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
