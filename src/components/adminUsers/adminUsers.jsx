import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import Link from "next/link";
import { updateUser, deleteUser } from "@/lib/action";

// USUÁRIOS ADMINISTRADORES DA PÁGINA
const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Usuários</h1>
      {users.slice(0,6).map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>

          <div className={styles.buttons}>
            <Link href={`/update/userUpdate/`}>
              <button className={`${styles.button} ${styles.update}`}>
                Editar
              </button>
            </Link>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={`${styles.button} ${styles.delete}`}>
                Excluir
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;