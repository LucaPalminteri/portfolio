import axios from "axios";
import { Octokit } from "octokit"

export default async function page() {

  console.log('\n\n\n\n\n');
let {data} = await axios.get('https://api.github.com/user/repos', { headers: {'Authorization': 'Bearer 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'} })

console.log(data[0]);
  return (
    <div>page</div>
  )
}