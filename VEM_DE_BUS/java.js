var pol=[], tipo, inte=0, meia=0, grat=0, i, ii=0, cad='', celulas, x, y=0;
    celulas = document.getElementsByTagName("td");


for(i=0; i<24; i++){
			pol[i]=0;
			}

	function main(){
	
	if(ii>=24){
		alert("Lotação maxima atingida! Vendas encerradas");
		alert("Foram vendidas: \n"+inte+" passagens inteiras \n"+meia+
		" passagens meia \n"+ grat+" passagens gratuitas" );
	} else {
			
			
			
	tipo=parseInt(prompt("Digite o codigo da passagem. \n 1 - para inteira. \n"+
	" 2 - para meia. \n 3 - para gratuita."));
		
		
		while(tipo!=1&&tipo!=2&&tipo!=3){
			tipo=parseInt(prompt("Codigo invalido!\n\n Digite novamente."+
			"\n 1 - para inteira. \n 2 - para meia. \n 3 - para gratuita."));
			
		}
			
			if(tipo==1){
			  inte=inte+1;		
			
			} 
			if(tipo==2){
			  meia=meia+1;
								
			} 
			if(tipo==3){
			  grat=grat+1;
				
			} 
		
		
		
		for(i=0; i<24; i++){
			  if(pol[i]==0){
			   cad=cad+(i+1)+" - ";
			  }
		}
		
		
			  // alert("cadeiras vagas \n"+cad);
			  
			   cad='';
			x=parseInt(prompt("Insira o número da poltrona"));
			while(pol[x-1]==1){
			
				x=parseInt(prompt("Poltrona indisponivel! \n\n Favor escolha outra poltrona. "));
			}
			
			pol[x-1] = 1;
				
				if(x<3){
					celulas[x-1].style.backgroundColor = "red";

				} else if(x<7){
					celulas[x].style.backgroundColor = "red";
				 
				} else if(x<11){
					celulas[x+1].style.backgroundColor = "red";
				 
				} else if(x<15){
					celulas[x+2].style.backgroundColor = "red";
				 
				} else if(x<19){
					celulas[x+3].style.backgroundColor = "red";
				 
				}  else if(x<23){
					celulas[x+4].style.backgroundColor = "red";
				 
				}  else {
					celulas[x+5].style.backgroundColor = "red";
				}
				
				
					cad='';
		alert("Compra realizada com sucesso.");

		
			ii++
			
			}
		
	}
 
