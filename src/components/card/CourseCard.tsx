import styled from "styled-components";
import {CourseInterface} from "../../interfaces/course.interface";

interface CourseCardProps {
    item: CourseInterface,
}

const CourseCardContainer = styled.div<{ $bgColor: string }>`
    border-radius: 18px;
    width: calc(33% - 12px);
    box-shadow: 0 10px 13px -4px rgba(35, 35, 95, 0.19);
    overflow: hidden;

    .card {
        &__img {
            height: 162px;
            background-color: ${({$bgColor}) => $bgColor};

            img {
                object-fit: contain;
                object-position: center;
                height: 100%;
                width: 100%;
            }
        }

        &__caption {
            padding: 12px 18px 18px;
            font-size: 18px;
            color: #39414B;
            font-weight: 800;
        }
    }

    @media screen and (max-width: 900px) {
        width: calc(50% - 9px);
    }
    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const CourseCard = ({item}: CourseCardProps) => {
    return <CourseCardContainer $bgColor={item.bgColor}>
        <div className={'card__img'}>
            <img src={item.image} alt={item.name}/>
        </div>
        <div className={'card__caption'}>
            {item.name}
        </div>
    </CourseCardContainer>
}

export default CourseCard;