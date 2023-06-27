// manager detail

// https://stackoverflow.com/questions/1474089/how-to-select-a-single-child-element-using-jquery

const managerCard = document.getElementsByClassName('manager-card');

const managerInfo = [
    "Son (David) is the CEO, Co-founder, and also the \“Strategist\” of NTQ Solution. He has more than 15 years of experience in the IT field and a vision of turning NTQ into a leading software development & well-recognized company in the IT industry. Under his guidance, NTQ has evolved from a start-up of only 5 to a big family of more than 800 people. Step by step, he has drawn an ambitious business plan and still guides other \"crew members\" toward the future flight. In 2019, he was appointed as a Board Member of VJC – a committee under the Vietnam Software & IT Services Association (VINASA).",
    "Phuong is the Executive Vice President and also the \"Innovator\" of NTQ Solution. After obtaining his Master's degree in Applied Mathematics from Rostov State University, he worked for various IT/telecom companies before joining NTQ. With a great desire to nurture new ideas & turn them into reality, he is in charge of the New Innovative Service (NIS) and constantly launches new software products for the market.",
    "ChanMi is the Country Manager of NTQ Korea, responsible for expanding the business of NTQ Solution in the Korean market. With 4 years working in a Korean company and 5 years of experience in business development for a Vietnamese IT outsourcing company in Korea, she is representing NTQ in the Korean market, connecting Korean clients to the Vietnamese offshore development working model and supporting NTQ to spread its name in the Korean market. Her goals are to increase NTQ Korea revenue by at least 50% and double target revenue in 2022-2023.",
    "Started as a technician, then became an experienced business consultant and a successful entrepreneur, now Adam is the business representative for the European market at NTQ solution. His passion is to remove barriers and bridge geographical gaps between businesses from Europe and Vietnam. He loves creating the \"global glue\" that helps people unite across functions or locations with his knowledge in Business, IT, and the Medical field.",
]

console.log(managerCard.length);


for(let i=0; i<managerCard.length;i++){
    managerCard[i].onclick = () =>{
        let img = managerCard[i].children[0].src;
        let name = managerCard[i].children[1].children[0].innerHTML;
        let job = managerCard[i].children[1].children[2].innerHTML;

        document.querySelector('#manager-detail img').src = img;
        document.querySelector('#manager-detail .name').innerHTML = name;
        document.querySelector('#manager-detail .job').innerHTML = job;
        document.querySelector('#manager-detail .description').innerHTML = managerInfo[i];

        if(document.getElementById('manager-detail').style.display === 'none'){
            // $('#manager-detail').slideDown(1000);
            alert('ok');
        }
    }
}

