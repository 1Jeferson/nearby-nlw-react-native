import { View, Text } from "react-native";

import { styles } from "./styles";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiro Nearby"
      />

      <Step
        icon={IconQrcode}
        title="Ative o cupo, om QR code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />

      <Step
        icon={IconTicket}
        title="Garanta as vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimentos"
      />
    </View>
  );
}
