class Gamemanager {
    constructor(_limit) {
        this.limit = _limit;
        this.current = 0;
        this.quizzs = [ ];
    }
    checkfill() {
        return this.quizzs[this.current].suggest;
    }
    check(answer) {
        for (let i = 0; i < this.quizzs[this.current].correct.length; i++) {
            if (answer ===  this.quizzs[this.current].correct[i]) {
                alert('Bạn đã đúng');
                nextquizz();
            }
        }
    }

    nextQuizz() {
        if (this.current <=  this.limit ) {
            this.current++;
        } else {
            alert('Bạn đã đến câu hỏi cuối');
            this.current = 0;
        }
    }

    addQuizz(quizz) {
        this.quizzs.push(quizz);
    }
}