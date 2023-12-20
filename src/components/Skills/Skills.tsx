import Tag from "../Tag/Tag";

export default async function Skills() {
    return (
        <div className="py-12">
            <h3 className="font-medium text-2xl pb-4">Skills</h3>
            <ul>
                <li><span className="font-medium">Programming Languages</span>: <Tag title="JavaScript" color="#F6DD1E" image="/js.png"/> TypeScript, Python, C#</li>
                <li><span className="font-medium">Web Development</span>: React, Next.js, Redux, React Native, SCSS, Tailwind, Figma</li>
                <li><span className="font-medium">Database</span>: MySQL, PostgreSQL, SQL Server, Redis, MongoDB</li>
                <li><span className="font-medium">DevOps</span>: Docker, Kubernetes, Linux, GitLab CI, Digital Ocean</li>
                <li><span className="font-medium">Communication Protocols</span>: RESTful APIs, gRPC</li>
                <li><span className="font-medium">Project Management</span>: SCRUM, Jira</li>
                <li><span className="font-medium">.NET Technologies</span>: Entity Framework, ASP.NET, WinForm</li>
            </ul>
        </div>
    )
}