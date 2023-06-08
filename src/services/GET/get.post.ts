import axios from 'axios'
import { Post } from '../../helpers/Model/GetServer/mode.post'

export const PostServices = {
  async getOnePost(id: number) {
    const { data } = await axios.get<Post[]>(
      `http://localhost:4000/api/post/${id}`,
      {
        params: {
          id: id,
        },
      },
    )

    return data
  },
}
