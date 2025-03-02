import styled from 'styled-components';

export const MusicPlayer = styled.div`
  margin-top: 7rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 30rem;
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.19),
    0 6px 6px -10px rgba(0, 0, 0, 0.23);
`;

export const TextAnim = styled.div`
  font-size: 23px;
  font-weight: 550;
  color: black;
  text-align: center;
  animation: effect 3s linear infinite;
  padding-bottom: 20px;
`;

export const NextSongDetails = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 1px;
  height: 4em;

  img {
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  p {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    align-items: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8),
      -2px -2px 4px rgba(129, 129, 129, 0.4);
  }
`;

export const PlayerFooter = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;

  .list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    .list__link {
      transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);

      &:focus,
      &:hover {
        color: #d30320;
      }
    }

    &--footer {
      justify-content: space-between;

      a {
        opacity: 0.5;

        &:focus,
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`;