import axios from 'axios'
import { Post } from '../../helpers/Model/GetServer/mode.post'

export const PostServices = {
  async getOnePost(id: number) {
    const { data } = await axios.get<Post[]>(
      `https://46.19.67.106:8080/api/post/${id}`,
      {
        params: {
          id: id,
        },
      },
    )

    return data
  },
}
