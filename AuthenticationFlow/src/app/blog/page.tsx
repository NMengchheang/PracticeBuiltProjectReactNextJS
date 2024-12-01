"use client";
import { logout } from "../action";

export default function BlogPage() {
  return (
    <div>
      <button onClick={() => logout()}>
        Logout
      </button>
    </div>
  )
}
