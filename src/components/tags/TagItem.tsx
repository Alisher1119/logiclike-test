import styled from "styled-components";

interface TagItemProps {
    tag: string | null;
    active: boolean;
    label: string;
    setActive: (tag: string | null) => void
}

const TagItemContainer = styled.button<{ $active: boolean }>`
    display: block;
    width: 100%;
    text-align: left;
    font-weight: 800;
    font-size: 18px;
    border-radius: 12px;
    padding: 12px;
    border-style: none;
    background-color: ${({$active}) => $active ? '#5FBF77' : 'transparent'};
    color: ${({$active}) => $active ? '#FFF' : '#39414B'};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    
    &:hover {
        opacity: 0.9;
    }
`;

const TagItem = ({tag = null, label, active = false, setActive = (tag) => {} }: TagItemProps) => {
    return <TagItemContainer $active={active} onClick={() => setActive(tag)}>
        {label}
    </TagItemContainer>
}

export default TagItem;