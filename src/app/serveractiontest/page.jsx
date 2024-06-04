import { addPost, deletePost } from "@/lib/action"

// PÁGINA DE TESTE DE AÇÕES NO SERVIDOR
const ServerActionTestPage = () => {

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="desc" name="desc"/>
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text" placeholder="userId" name="userId"/>
        <button>Criar</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Deletar</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage