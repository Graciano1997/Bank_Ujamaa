const mobileDashBoard = document.querySelector(".mobileDashBoard");
const transferDashBtn = document.querySelector("#transferDashBtn");
const levantaDashBtn = document.querySelector("#levantaDashBtn");
const saldoDashBtn = document.querySelector("#saldoDashBtn");

if(transferDashBtn!==null){
    transferDashBtn.addEventListener("click",()=>{
        const template=`<div class="levantamentoContainerDash">
        <ul>
        <li>levantamento</li>
        <li>levantamento</li>
        <li>levantamento</li>
        <li>levantamento</li>
        </ul>
        <a href="/dashboard/levantamentos">Levantamentos</a>
        </div>   
        `;
        mobileDashBoard.innerHTML=template;
        
    });
}

if(saldoDashBtn!==null){
    saldoDashBtn.addEventListener("click",()=>{
        const template=`<div class="saldoContainer">
        <canvas id="myChart"></canvas>
        <a href="/dashboard/cartoes">Saldo</a>
    </div>
        `;
        mobileDashBoard.innerHTML=template;
        window.location.reload();
    });
}

if(levantaDashBtn!==null){
    levantaDashBtn.addEventListener("click",()=>{
        const template=`<div class="levantamentoContainerDash">
        <ul>
            <li>levantamento</li>
            <li>levantamento</li>
            <li>levantamento</li>
            <li>levantamento</li>
        </ul>
        <a href="/dashboard/transferencias">Transferencia</a>
    </div>
        `;
        mobileDashBoard.innerHTML=template;
    });
}