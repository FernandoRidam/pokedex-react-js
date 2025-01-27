import { motion } from "framer-motion";
import styled from "styled-components";

export const Dialog = styled(motion.div)`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  background-color: ${({ theme, $status }) => theme.colors[$status]};
`;

export const Message = styled(motion.span)`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;
