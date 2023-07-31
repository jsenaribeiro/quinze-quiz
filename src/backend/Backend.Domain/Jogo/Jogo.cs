namespace Domain;

public enum FaseTipo { Disjuntiva=0, Conjuntiva=1 }

public record Fase(FaseTipo Tipo, string Titulo, int ImagemId, Questao[] Questoes, Introducao[] Introducoes);

public record Ranking(string Jogador, int Posicao);

public record Questao(string Texto, Opcao[] Opcoes);

public record Opcao(string Fase, string Texto, int Pontos, string Questao);

public record Introducao();

public record Jogo(Fase[] Content, string[] Imagens, Ranking[] Ranking);

