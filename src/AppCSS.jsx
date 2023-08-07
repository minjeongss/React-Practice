import './AppCSS.css';

//PostCSS 사용 예시
import Button1 from './components/Button1';
import Button2 from './components/Button2';

//Styled Components 사용 예시
import StyledComponent from './StyledComponent';

//tailwind Components 사용 예시
import TailwindComponent from './TailwindComponent';

export default function AppCSS(){
    return (
        <>
            <Button1 />
            <Button2 />
            <StyledComponent />
            <TailwindComponent />
        </>
    );
}