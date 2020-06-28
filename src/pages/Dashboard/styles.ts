import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #261643;
`;

export const Rooms = (styled(FlatList as new () => FlatList)`
  flex: 1;
` as React.ComponentType) as new <T>() => FlatList<T>;

export const RoomPanel = styled.TouchableOpacity`
  height: 90px;
  border: 1px solid #707070;
  width: 80%;
  margin: 15px auto;
  justify-content: center;
  align-items: center;
`;

export const RoomText = styled.Text`
  color: #2a7ba4;
  font-size: 30px;
`;
