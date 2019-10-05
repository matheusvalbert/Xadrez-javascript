class Peca {

    constructor(tipo, posI, posJ, id) {

        this._tipo = tipo;
        this._posI = posI;
        this._posJ = posJ;
        this._id = id;
    }

    get tipo() {

        return this._tipo;
    }

    get posI() {

        return this._posI;
    }

    get posJ() {

        return this._posJ;
    }

    get id() {

        return this._id;
    }

    setPosI(posI) {

        this._posI = posI;
    }

    setPosJ(posJ) {

        this._posJ = posJ;
    }

    setId(id) {

        this._id = id;
    }

    mover() {}

    checarVez(vez) {

        if(vez != this._tipo) {

            return false;
        }
    }
}

class Rei extends Peca {

    constructor(tipo, posI, posJ, id) {

        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j, vez) {

        if(this.checarVez(vez) == false) {

            return false;
        }

        var x, y, flag = 0;

        x = Math.abs(i - this._posI);
        y = Math.abs(j - this._posJ);

        if(Math.max(x, y) < 2) {

            if(tabuleiro[i][j] != 0) {

                if(tabuleiro[i][j] > 6 && this._tipo == "W") {

                    flag = 1;
                }
                if(tabuleiro[i][j] < 7 && this._tipo == "B") {

                    flag = 1;
                }
            }
            else {

                flag = 1;
            }
        }

        if(flag == 1) {
    
            this.setPosI(i);
            this.setPosJ(j);
            return true;
        }
    }
}

class Rainha extends Peca {

    constructor(tipo, posI, posJ, id) {

        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j, vez) {

        if(this.checarVez(vez) == false) {

            return false;
        }

        var flag = 0, flag1 = 0, x, y, flag2 = 0, count = 0;

        if(i == this._posI || j == this._posJ) {

            flag = 0
            flag1 = 0;
            count = 0;
                
            if(i == this._posI) {
    
                for(var k = j; k < this._posJ; k++) {
    
                    if(tabuleiro[i][k] != 0) {
        
                        flag = 1;
                        count++;
    
                        if(tabuleiro[i][k] > 6 && tabuleiro[i][j] != 0 && this._tipo == "W") {
    
                            flag1 = 1;
                        }
                        if(tabuleiro[i][k] < 7 && tabuleiro[i][j] != 0 && this._tipo == "B") {
    
                            flag1 = 1;
                        }
                    }
                }
        
                for(var k = j; k > this._posJ; k--) {
    
                    if(tabuleiro[i][k] != 0) {
        
                        flag = 1;
                        count++;
    
                        if(tabuleiro[i][k] > 6 && this._tipo == "W") {
    
                            flag1 = 1;
                        }
                        if(tabuleiro[i][k] < 7 && this._tipo == "B") {
    
                            flag1 = 1;
                        }
                    }
                }
            }
    
            else if(j == this._posJ) {
    
                for(var k = i; k < this._posI; k++) {
    
                    if(tabuleiro[k][j] != 0) {
        
                        flag = 1;
                        count++;
    
                        if(tabuleiro[k][j] > 6 && this._tipo == "W") {
    
                            flag1 = 1;
                        }
                        if(tabuleiro[k][j] < 7 && this._tipo == "B") {
    
                            flag1 = 1;
                        }
                    }
                }
        
                for(var k = i; k > this._posI; k--) {
        
                    if(tabuleiro[k][j] != 0) {
        
                        flag = 1;
                        count++;
    
                        if(tabuleiro[k][j] > 6 && this._tipo == "W") {
    
                            flag1 = 1;
                        }
                        if(tabuleiro[k][j] < 7 && this._tipo == "B") {
    
                            flag1 = 1;
                        }
                    }
                }
            }
            else {
    
                return false;
            }
    
            if(flag == 0 || (flag1 == 1 && count == 1)) {
    
                this.setPosI(i);
                this.setPosJ(j);
                return true;
            }
            else {
    
                return false;
            }
        }
        else {

            flag = 0;
            flag1 = 0;
            flag2 = 0;
            count = 0;

            if(i + j == this._posI + this._posJ || i + this._posJ == this._posI + j) {

                flag = 1;
            }
    
            if(flag == 1) {
    
                for(x = i, y = j; x < this._posI && y < this._posJ; x++, y++) {
    
                    if(tabuleiro[x][y] != 0) {
    
                        flag1 = 1;
                        count++;
    
                        if(tabuleiro[x][y] > 6 && this._tipo == "W") {
    
                            flag2 = 1;
                        }
                        if(tabuleiro[x][y] < 7 && this._tipo == "B") {
    
                            flag2 = 1;
                        }
                    }
                }
     
                for(x = i, y = j; x > this._posI && y > this._posJ; x--, y--) {
    
                    if(tabuleiro[x][y] != 0) {
    
                        flag1 = 1;
                        count++;
    
                        if(tabuleiro[x][y] > 6 && this._tipo == "W") {
    
                            flag2 = 1;
                        }
                        if(tabuleiro[x][y] < 7 && this._tipo == "B") {
    
                            flag2 = 1;
                        }
                    }
                }
    
                for(x = i, y = j; x > this._posI && y < this._posJ; x--, y++) {
    
                    if(tabuleiro[x][y] != 0) {
    
                        flag1 = 1;
                        count++;
    
                        if(tabuleiro[x][y] > 6 && this._tipo == "W") {
    
                            flag2 = 1;
                        }
                        if(tabuleiro[x][y] < 7 && this._tipo == "B") {
    
                            flag2 = 1;
                        }
                    }
                }
                
                for(x = i, y = j; x < this._posI && y > this._posJ; x++, y--) {
    
                    if(tabuleiro[x][y] != 0) {
    
                        flag1 = 1;
                        count++;
    
                        if(tabuleiro[x][y] > 6 && this._tipo == "W") {
    
                            flag2 = 1;
                        }
                        if(tabuleiro[x][y] < 7 && this._tipo == "B") {
    
                            flag2 = 1;
                        }
                    }
                }
            }
    
            if(flag == 1 && (flag1 == 0 || (flag2 == 1 && count == 1))) {
    
                this.setPosI(i);
                this.setPosJ(j);
                return true;
            }
        }
    }
}

class Bispo extends Peca {

    constructor(tipo, posI, posJ, id) {

        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j, vez) {

        if(this.checarVez(vez) == false) {

            return false;
        }

        var flag = 0, flag1 = 0, x, y, flag2 = 0, count = 0;
        
        if(i + j == this._posI + this._posJ || i + this._posJ == this._posI + j) {

            flag = 1;
        }

        if(flag == 1) {

            for(x = i, y = j; x < this._posI && y < this._posJ; x++, y++) {

                if(tabuleiro[x][y] != 0) {

                    flag1 = 1;
                    count++;

                    if(tabuleiro[x][y] > 6 && this._tipo == "W") {

                        flag2 = 1;
                    }
                    if(tabuleiro[x][y] < 7 && this._tipo == "B") {

                        flag2 = 1;
                    }
                }
            }
 
            for(x = i, y = j; x > this._posI && y > this._posJ; x--, y--) {

                if(tabuleiro[x][y] != 0) {

                    flag1 = 1;
                    count++;

                    if(tabuleiro[x][y] > 6 && this._tipo == "W") {

                        flag2 = 1;
                    }
                    if(tabuleiro[x][y] < 7 && this._tipo == "B") {

                        flag2 = 1;
                    }
                }
            }

            for(x = i, y = j; x > this._posI && y < this._posJ; x--, y++) {

                if(tabuleiro[x][y] != 0) {

                    flag1 = 1;
                    count++;

                    if(tabuleiro[x][y] > 6 && this._tipo == "W") {

                        flag2 = 1;
                    }
                    if(tabuleiro[x][y] < 7 && this._tipo == "B") {

                        flag2 = 1;
                    }
                }
            }
            
            for(x = i, y = j; x < this._posI && y > this._posJ; x++, y--) {

                if(tabuleiro[x][y] != 0) {

                    flag1 = 1;
                    count++;

                    if(tabuleiro[x][y] > 6 && this._tipo == "W") {

                        flag2 = 1;
                    }
                    if(tabuleiro[x][y] < 7 && this._tipo == "B") {

                        flag2 = 1;
                    }
                }
            }
        }

        if(flag == 1 && (flag1 == 0 || (flag2 == 1 && count == 1))) {

            this.setPosI(i);
            this.setPosJ(j);
            return true;
        }
    }
}

class Cavalo extends Peca {

    constructor(tipo, posI, posJ, id) {

        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j, vez) {

        if(this.checarVez(vez) == false) {

            return false;
        }

        if(j == this._posJ + 2 && (i == this._posI + 1 || i == this._posI -1) && ((tabuleiro[i][j] == 0 || (tabuleiro[i][j] > 6) && this._tipo == "W") || ((tabuleiro[i][j] == 0 || tabuleiro[i][j] < 7) && this._tipo == "B"))) {

            this.setPosI(i);
            this.setPosJ(j);
            return true;
        }
        if(j == this._posJ - 2 && (i == this._posI + 1 || i == this._posI -1) && ((tabuleiro[i][j] == 0 || (tabuleiro[i][j] > 6) && this._tipo == "W") || ((tabuleiro[i][j] == 0 || tabuleiro[i][j] < 7) && this._tipo == "B"))) {

            this.setPosI(i);
            this.setPosJ(j);
            return true;
        }
        if(i == this._posI + 2 && (j == this._posJ + 1 || j == this._posJ -1) && ((tabuleiro[i][j] == 0 || (tabuleiro[i][j] > 6) && this._tipo == "W") || ((tabuleiro[i][j] == 0 || tabuleiro[i][j] < 7) && this._tipo == "B"))) {

            this.setPosI(i);
            this.setPosJ(j);
            return true;
        }
        if(i == this._posI - 2 && (j == this._posJ + 1 || j == this._posJ -1) && ((tabuleiro[i][j] == 0 || (tabuleiro[i][j] > 6) && this._tipo == "W") || ((tabuleiro[i][j] == 0 || tabuleiro[i][j] < 7) && this._tipo == "B"))) {

            this.setPosI(i);
            this.setPosJ(j);
            return true;
        }
    }
}

class Torre extends Peca {

    constructor(tipo, posI, posJ, id) {

        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j, vez) {

        if(this.checarVez(vez) == false) {

            return false;
        }

        var flag = 0, flag1 = 0, count = 0;
                
        if(i == this._posI) {

            for(var k = j; k < this._posJ; k++) {

                if(tabuleiro[i][k] != 0) {
    
                    flag = 1;
                    count++;

                    if(tabuleiro[i][k] > 6 && this._tipo == "W") {

                        flag1 = 1;
                    }
                    if(tabuleiro[i][k] < 7 && this._tipo == "B") {

                        flag1 = 1;
                    }
                }
            }
    
            for(var k = j; k > this._posJ; k--) {

                if(tabuleiro[i][k] != 0) {
    
                    flag = 1;
                    count++;

                    if(tabuleiro[i][k] > 6 && this._tipo == "W") {

                        flag1 = 1;
                    }
                    if(tabuleiro[i][k] < 7 && this._tipo == "B") {

                        flag1 = 1;
                    }
                }
            }
        }

        else if(j == this._posJ) {

            for(var k = i; k < this._posI; k++) {

                if(tabuleiro[k][j] != 0) {
    
                    flag = 1;
                    count++;

                    if(tabuleiro[k][j] > 6 && this._tipo == "W") {

                        flag1 = 1;
                    }
                    if(tabuleiro[k][j] < 7 && this._tipo == "B") {

                        flag1 = 1;
                    }
                }
            }
    
            for(var k = i; k > this._posI; k--) {
    
                if(tabuleiro[k][j] != 0) {
    
                    flag = 1;
                    count++;

                    if(tabuleiro[k][j] > 6 && this._tipo == "W") {

                        flag1 = 1;
                    }
                    if(tabuleiro[k][j] < 7 && this._tipo == "B") {

                        flag1 = 1;
                    }
                }
            }
        }
        else {

            return false;
        }

        if(flag == 0 || (flag1 == 1 && count == 1)) {

            this.setPosI(i);
            this.setPosJ(j);
            return true;
        }
        else {

            return false;
        }
    }
}

class Peao extends Peca {

    constructor(tipo, posI, posJ, id) {

        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j, vez) {

        var flag = 0;

        if(this.checarVez(vez) == false) {

            return false;
        }

        if(tabuleiro[i][j] == 0) {

            if(this.tipo == "B" && (i == 2 || i == 3) && i >= (this.posI+1) && this.posJ == j) {

                flag = 1;
            }
            else if(this.tipo == "B" && i == (this.posI+1) && this.posJ == j) {

                flag = 1;
            }
            else if(this.tipo == "W" && (i == 4 || i == 5) && i <= (this.posI-1) && this.posJ == j) {

                flag = 1;
            }
            else if(this.tipo == "W" && i == (this.posI-1) && this.posJ == j) {

                flag = 1;
            }
        }
        else if(this.tipo == "B" && i == (this.posI+1) && (j == (this.posJ+1) || j == (this.posJ-1))) {

            if(tabuleiro[i][j] < 7) {
                
                flag = 1;
            }
        }
        else if(this.tipo == "W" && i == (this.posI-1) && (j == (this.posJ+1) || j == (this.posJ-1))) {

            if(tabuleiro[i][j] > 6) {
                
                flag = 1;
            }
        }

        if(flag == 1) {

            if(this._tipo == "W" && this._posI == 1) {

                this._id = 0;
                return "troca W";
            }
            if(this._tipo == "B" && this._posI == 6) {

                this._id = 0;
                return "troca B";
            }

            this.setPosI(i);
            this.setPosJ(j);
            return true;
        }
    }
}