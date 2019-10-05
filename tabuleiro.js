class Tabuleiro {

    constructor(W_KING, W_QUEEN, W_ROOK, W_BISHOP, W_KNIGHT, W_PAWN, B_KING, B_QUEEN, B_ROOK, B_BISHOP, B_KNIGHT, B_PAWN) {

        this._W_KING = W_KING;
        this._W_QUEEN = W_QUEEN;
        this._W_ROOK = W_ROOK;
        this._W_BISHOP = W_BISHOP;
        this._W_KNIGHT = W_KNIGHT;
        this._W_PAWN = W_PAWN;

        this._B_KING = B_KING;
        this._B_QUEEN = B_QUEEN;
        this._B_ROOK = B_ROOK;
        this._B_BISHOP = B_BISHOP;
        this._B_KNIGHT = B_KNIGHT;
        this._B_PAWN = B_PAWN;

        this._tabuleiro = Array(8);
        this._arrayPecas = [];
        this._vez = "W";
    }

    addPeca(Peca) {

        this._arrayPecas.push(Peca);
        var i = Peca.posI;
        var j = Peca.posJ;
        var id = Peca.id;
        this._tabuleiro[i][j] = id;
    }

    rmPeca(i, j) {

        for(var k in this._arrayPecas) {

            if(this._arrayPecas[k].id == 0) {

                this._arrayPecas.splice(k, 1);
            }

            if(this._arrayPecas[k].posI == i && this._arrayPecas[k].posJ == j) {

                var id = this._tabuleiro[i][j];

                if(this._arrayPecas[k].id != id) {

                    this._arrayPecas.splice(k, 1);
                }
            }
        }
    }

    getPeca(i, j) {

        if(this._tabuleiro[i][j] != 0) {

            var peca = {};
            peca.i = i;
            peca.j = j;
            return peca;
        }
            return null;
    }

    init() {

        for(var i = 0; i < 8; i++) {
            this._tabuleiro[i] = new Array(8);
            for(var j = 0; j < 8; j++)
                this._tabuleiro[i][j] = 0; // ID_1 = 0
        }

        this.addPeca(new Rei("W", 7, 4, this._W_KING));
        this.addPeca(new Rainha("W", 7, 3, this._W_QUEEN));
        this.addPeca(new Bispo("W", 7, 2, this._W_BISHOP));
        this.addPeca(new Bispo("W", 7, 5, this._W_BISHOP));
        this.addPeca(new Cavalo("W", 7, 1, this._W_KNIGHT));
        this.addPeca(new Cavalo("W", 7, 6, this._W_KNIGHT));
        this.addPeca(new Torre("W", 7, 0, this._W_ROOK));
        this.addPeca(new Torre("W", 7, 7, this._W_ROOK));

        for(i = 0; i < 8; i++) {

            this.addPeca(new Peao("W", 6, i, this._W_PAWN));
        }

        this.addPeca(new Rei("B", 0, 4, this._B_KING));
        this.addPeca(new Rainha("B", 0, 3, this._B_QUEEN));
        this.addPeca(new Bispo("B", 0, 2, this._B_BISHOP));
        this.addPeca(new Bispo("B", 0, 5, this._B_BISHOP));
        this.addPeca(new Cavalo("B", 0, 1, this._B_KNIGHT));
        this.addPeca(new Cavalo("B", 0, 6, this._B_KNIGHT));
        this.addPeca(new Torre("B", 0, 0, this._B_ROOK));
        this.addPeca(new Torre("B", 0, 7, this._B_ROOK));

        for(i = 0; i < 8; i++) {

            this.addPeca(new Peao("B", 1, i, this._B_PAWN));
        }
    }

    getRepresentacao() {

        return this._tabuleiro;
    }

    moverPeca(peca, Pi, Pj) {

        var validacao;

        for(var i in this._arrayPecas) {

            if(this._arrayPecas[i].posI == peca.i && this._arrayPecas[i].posJ == peca.j) {

                validacao = this._arrayPecas[i].mover(this._tabuleiro, Pi, Pj, this._vez);

                if (validacao == true) {

                    if(this._vez == "W") {

                        this._vez = "B";
                    }
                    else if(this._vez == "B") {

                        this._vez = "W";
                    }
                    this._tabuleiro[peca.i][peca.j] = 0;
                    this._tabuleiro[Pi][Pj] = this._arrayPecas[i].id;
                    this.rmPeca(Pi, Pj);
                    return true;
                }
                else if(validacao == "troca W") {

                    if(this._vez == "W") {

                        this._vez = "B";
                    }
                    else if(this._vez == "B") {

                        this._vez = "W";
                    }

                    this._tabuleiro[Pi][Pj] = this._W_QUEEN;
                    this._tabuleiro[peca.i][peca.j] = 0;
                    this.rmPeca(Pi,Pj);
                    this.addPeca(new Rainha("W", Pi, Pj, this._W_QUEEN));
                    return true;
                }
                else if(validacao == "troca B") {

                    if(this._vez == "W") {

                        this._vez = "B";
                    }
                    else if(this._vez == "B") {

                        this._vez = "W";
                    }

                    this._tabuleiro[Pi][Pj] = this._B_QUEEN;
                    this._tabuleiro[peca.i][peca.j] = 0;
                    this.rmPeca(Pi,Pj);
                    this.addPeca(new Rainha("B", Pi, Pj, this._B_QUEEN));
                    return true;
                }
            }
        }
    }

    acabarJogo() {

        var count = 0, w = 0, b = 0;

        for(var i in this._arrayPecas) {

            if(this._arrayPecas[i] instanceof Rei) {

                if(this._arrayPecas[i]._tipo == "W") {

                    count++;
                    w = 1;
                }
                if(this._arrayPecas[i]._tipo == "B") {

                    count++;
                    b = 1;
                }
            }
        }
        if(count == 2) {

            return false;
        }
        else {

            if(w == 0) {

                return "Black";
            }

            if(b == 0) {

                return "White";
            }
        }
    }
}