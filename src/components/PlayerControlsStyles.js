import styled from 'styled-components';

export const MusicPlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;

  .play-btn {
    padding: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 1rem;
    border: none;
    outline: none;
    background: none;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(33, 33, 33, 0.1), 0 3px 12px rgba(33, 33, 33, 0.15);
    transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);

    &:focus {
      color: rgba(171, 2, 26, 0.95);
      opacity: 1;
      box-shadow: 0 6px 9px rgba(33, 33, 33, 0.1), 0 6px 16px rgba(33, 33, 33, 0.15);
    }

    &:hover {
      transform: scale(1.2);
      color: rgba(171, 2, 26, 0.95);
      opacity: 1;
      box-shadow: 0 6px 9px rgba(33, 33, 33, 0.1), 0 6px 16px rgba(33, 33, 33, 0.15);
    }
  }

  .skip-btn {
    padding: 0.7rem;
    font-size: 1rem;
    border: none;
    outline: none;
    background: none;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(33, 33, 33, 0.1), 0 3px 12px rgba(33, 33, 33, 0.15);
    transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);

    &:focus {
      color: rgba(171, 2, 26, 0.95);
      opacity: 1;
      box-shadow: 0 6px 9px rgba(33, 33, 33, 0.1), 0 6px 16px rgba(33, 33, 33, 0.15);
    }

    &:hover {
      color: rgba(171, 2, 26, 0.95);
      opacity: 1;
      box-shadow: 0 6px 9px rgba(33, 33, 33, 0.1), 0 6px 16px rgba(33, 33, 33, 0.15);
    }
  }
`;