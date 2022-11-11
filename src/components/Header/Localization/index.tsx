import { LocalizationContainer, TextLocation } from './styles';
import { MapPin } from 'phosphor-react';

export function Localization() {
  return (
    <LocalizationContainer>
      <TextLocation>
        <MapPin weight="fill" />
        Palmas, TO
      </TextLocation>
    </LocalizationContainer>
  );
}
