import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Logo } from '../Logo';

import { BackButton, HeaderView } from "./styles";
import { ArrowLeft } from '@phosphor-icons/react';

export const Header = ({
  layout,
}) => {
  const navigate = useNavigate();

  const isHome = useLocation().pathname === '/';

  return (
    <HeaderView>
      {
        !isHome && (
          <BackButton
            onClick={() => navigate(-1)}
          >
            <ArrowLeft />
          </BackButton>
        )
      }

      {
        layout === 'app' && (
          <Logo src={logo} />
        )
      }
    </HeaderView>
  );
};
