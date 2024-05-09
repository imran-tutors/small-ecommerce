import { signOut } from "firebase/auth";
import auth from "../../Components/firebase.init";

export default function Orders() {
  return (
    <div>
      Orders
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
