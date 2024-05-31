import TagItem from "./TagItem";
import styled from "styled-components";

interface TagListProps {
    tags: string[];
    activeTag: string | null;
    onTagChange: (tag: string | null) => void,
}

const TagListContainer = styled.div`
    box-sizing: border-box;
    width: 264px;
    max-width: 100%;
    border-radius: 18px;
    border: 1px solid #CFCFE4;
    padding: 12px;
    margin-bottom: 24px;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;

const TagList = ({tags = [], activeTag = null, onTagChange = (tag) => {} }: TagListProps) => {

    return <TagListContainer>
        <TagItem key={-1} tag={null} active={activeTag === null} label={'Все темы'} setActive={onTagChange}/>
        {tags.map((tag, index) => <TagItem key={index} tag={tag} active={activeTag === tag} label={tag}
                                           setActive={onTagChange}/>)}
    </TagListContainer>;
}

export default TagList