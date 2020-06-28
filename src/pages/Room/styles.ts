import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #261643;
`;

export const Lamps = (styled(FlatList as new () => FlatList)`
  flex: 1;
` as React.ComponentType) as new <T>() => FlatList<T>;

interface LampState {
  lampState: boolean;
}

export const LampPanel = styled.TouchableOpacity<LampState>`
  height: 90px;
  border: 1px solid #707070;
  width: 80%;
  margin: 15px auto;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.lampState &&
    css`
      background: #2a7ba4;
    `}
`;

export const LampText = styled.Text<LampState>`
  ${(props) =>
    props.lampState
      ? css`
          color: #261643;
        `
      : css`
          color: #2a7ba4;
        `}
  font-size: 20px;
  text-align: center;
`;

export const RoomOptionPanel = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const RoomOption = styled.TouchableOpacity`
  height: 60px;
  border: 1px solid #707070;
  width: 40%;
  margin: 15px auto;
  justify-content: center;
  align-items: center;
`;

export const RoomOptionText = styled.Text`
  color: #2a7ba4;
  font-size: 20px;
  text-align: center;
`;
