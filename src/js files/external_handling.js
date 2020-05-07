let statement;
let author;
let sample_quotes = [];

let rand = () =>{
    let min = Math.ceil(0);
    let max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let loadQuotes = (x) => {
    let current_quotes = [];
    if(statement){
        if(x === 'Success' || x === null){
            statement.textContent = 'loading...';
            author.textContent = 'loading...';
            current_quotes = sample_quotes.success; 
            clearInterval(2);
            clearInterval(3);
            clearInterval(4);
            setInterval(()=>{
                let i = rand();
                statement.textContent = current_quotes[i].statement;
                author.textContent = current_quotes[i].author;
            }, 3000);
        }else if(x === 'Programming'){
            current_quotes = sample_quotes.programming;
            statement.textContent = 'Loading...';
            author.textContent = 'Loading...';
            clearInterval(1);
            clearInterval(3);
            clearInterval(4);
            setInterval(()=>{
                let i = rand();
                statement.textContent = current_quotes[i].statement;
                author.textContent = current_quotes[i].author;
            }, 3000);
        }else if(x === 'Love'){
            current_quotes = sample_quotes.love;
            statement.textContent = 'Loading...';
            author.textContent = 'Loading...';
            clearInterval(1);
            clearInterval(2);
            clearInterval(4);
            setInterval(()=>{
                let i = rand();
                statement.textContent = current_quotes[i].statement;
                author.textContent = current_quotes[i].author;
            }, 3000);
        }else{
            current_quotes = sample_quotes.money;
            statement.textContent = 'Loading...';
            author.textContent = 'Loading...';
            clearInterval(1);
            clearInterval(2);
            clearInterval(3);
            setInterval(()=>{
                let i = rand();
                statement.textContent = current_quotes[i].statement;
                author.textContent = current_quotes[i].author;
            }, 3000);
        }
    }
}

module.exports = {
    setSelectors: (stmt, aut) => {
        statement = stmt;
        author = aut;
    },

    setQoutes: (quote) =>{
        sample_quotes = quote;
    },

    resetActiveBtnTo: (btn) => {
        const successBtn = document.querySelector('#successBtn');
        const loveBtn = document.querySelector('#loveBtn');
        const moneyBtn = document.querySelector('#moneyBtn');
        const programmingBtn = document.querySelector('#programmingBtn');
    
        switch(btn){
            case 'Success':
                successBtn.className = 'btn btn-success m-1';
                loveBtn.className = 'btn btn-outline-danger m-1';
                moneyBtn.className = 'btn btn-outline-info m-1';
                programmingBtn.className = 'btn btn-outline-dark m-1';
                break;
            case 'Money':
                successBtn.className = 'btn btn-outline-success m-1';
                loveBtn.className = 'btn btn-outline-danger m-1';
                moneyBtn.className = 'btn btn-info m-1';
                programmingBtn.className = 'btn btn-outline-dark m-1';
                break;
            case 'Love':
                successBtn.className = 'btn btn-outline-success m-1';
                loveBtn.className = 'btn btn-danger m-1';
                moneyBtn.className = 'btn btn-outline-info m-1';
                programmingBtn.className = 'btn btn-outline-dark m-1';
                break;
            case 'Programming':
                successBtn.className = 'btn btn-outline-success m-1';
                loveBtn.className = 'btn btn-outline-danger m-1';
                moneyBtn.className = 'btn btn-outline-info m-1';
                programmingBtn.className = 'btn btn-dark m-1';
                break;
            default:
                console.log('error');
        }
    },

    loadQuotes: loadQuotes,
};