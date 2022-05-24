import styled from "styled-components";

export const VirtualCardWrapper = styled.div<{
  cardBg?: string;
  isActive?: boolean;
}>`
  width: 22rem;
  height: 13rem;
  color: ${props => props.cardBg === 'blue'
    ? 'white'
    : props.theme.colors.deepPurple
  };
  position: relative;

  img{
    max-width: 100%;
  }

  .card-content{
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-name-cont{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .fund{
        opacity: ${props => props.isActive
          ? '1'
          : '0.3'
        };
      }
    }

    .card-user-name{
      display: flex;
      flex-direction: column;

      .description{
        opacity: 0.3;
      }

      .owner-name{
        font-weight: 500;
        font-size: 1.125rem;
        margin: 0.5rem 0;
      }

      .card-number{
        font-size: 1.5rem;
        font-weight: ${props => props.isActive
          ? '700'
          : '500'
        };
        opacity: ${props => props.isActive
          ? '1'
          : '0.3'
        };
      }
    }

    .card-exp-cont{
      display: flex;

      .exp-title{
        opacity: 0.3;
      }

      .card-exp{
        margin-left: 0.5rem;
      }
    }
  }
`