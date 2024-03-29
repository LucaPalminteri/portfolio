import { communicationProtocolsTags, databaseTags, devOpsTags, netTechnologiesTags, programmingTags, projectManagmentTags, webDevelopmentTags } from "@/src/utils/tags";
import Tag from "../Tag/Tag";
import TagContainer from "../TagContainer/TagContainer";

export default async function Skills() {
    return (
        <div className="py-12">
            <h3 className="font-medium text-2xl pb-4">Skills</h3>
            <ul>
                <li><h4 className="font-normal">Programming Languages</h4> <TagContainer tags={programmingTags} /></li>
                <li><h4 className="font-normal">Web Development</h4> <TagContainer tags={webDevelopmentTags} /></li>
                <li><h4 className="font-normal">Database</h4> <TagContainer tags={databaseTags} /></li>
                <li><h4 className="font-normal">DevOps</h4> <TagContainer tags={devOpsTags} /></li>
                <li><h4 className="font-normal">Communication Protocols</h4> <TagContainer tags={communicationProtocolsTags} /></li>
                <li><h4 className="font-normal">Project Management</h4> <TagContainer tags={projectManagmentTags} /></li>
                <li><h4 className="font-normal">.NET Technologies</h4> <TagContainer tags={netTechnologiesTags} /></li>
            </ul>
        </div>
    )
}