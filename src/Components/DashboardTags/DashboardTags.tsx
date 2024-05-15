import React from 'react';
import {Tags} from "../../Types/Tags";
import './DashboardTags.scss';

interface DashboardTagsProps {
    tags: Tags[];
    handleClickTag: (e: string) => void;
}

const DashboardTags: React.FC<DashboardTagsProps> = ({tags, handleClickTag}: any) => {

    return (
        <div className="tag-filter">
            {tags.map((e:any) => (
                <button
                    key={e.name}
                    className={`tag ${e.selected ? 'selected' : ''}`}
                    onClick={() => handleClickTag(e.name)}
                >
                    {e.name}
                </button>
            ))}
        </div>
    );
}

export default DashboardTags;
