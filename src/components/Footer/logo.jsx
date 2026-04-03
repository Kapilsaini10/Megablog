import react from  'react';
import logoImage from '../../assets/logo.png';

function Logo({ width ="50px"}) {
    return (
        <div className="flex items-center gap-2">
        <img src={logoImage} alt="logo" width={width} height="auto" />
        </div>
    )
}

export default Logo;    