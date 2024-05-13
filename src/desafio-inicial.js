const determinarNivel = (XP) => {
  if (XP <= 1000) {
    return "Ferro";
  } else if (XP >= 1001 && XP <= 2000) {
    return "Bronze";
  } else if (XP >= 2001 && XP <= 5000) {
    return "Prata";
  } else if (XP >= 5001 && XP <= 7000) {
    return "Ouro";
  } else if (XP >= 7001 && XP <= 8000) {
    return "Platina";
  } else if (XP >= 8001 && XP <= 9000) {
    return "Ascendente";
  } else if (XP >= 9001 && XP <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
};

const exibirMensagem = (nome, nivel) => {
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
};

const mainFunction = () => {
  let haroName = "Tony Abrantes";
  let heroXP = 10001;

  const heroLevel = determinarNivel(heroXP);
  exibirMensagem(haroName, heroLevel);
};

mainFunction();
