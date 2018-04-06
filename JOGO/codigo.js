function main(){

//********************* Variaveis *********************//

var palavra, i=0, j, k, m, ii, jj, contagem = 0, letra, usadas = [] ;
var resp = [], ganhou = false, erros = 0, entrou, f = true, resp2 = "", r = [], dica;
var jogarNovamente;
// palavra = palvra inserida pelo jogador 1
// letra = letra escolhida pelo jogador 2
// (i, j, k, m, ii, jj) = contadores     
// contagem = contador de letras usadas
// usadas = vetor de letras usadas
// resp = encerra o programa quando o jogadot 2 completa a palavra digitando letra por letra
// erros = os erros das letras (letras que não contém na palavra digitada pelo jogador 1)
// entrou = contador de quando a letra entra na palavra 
// resp2 = imprime as letras contidas na palavra
// r = dá a condição de qual caractere será imprimido no vetor resp2
// dica = dica digitada pelo jogador 1
// jogarNovamente = o jogo rolar novamente 
//*****************************************************//						
					
//******************CONDIÇÕES GERAIS*******************//
	// Aonde está armazenado todo o programa			
	do{
		erros=0;		
		ganhou = false;	 
		i = 0;
		var usadas = [];
		resp2="";
		alert("Jogador 1, digite a palavra. ");	// Primeiro comando do jogo
		palavra = prompt("Digite a palavra: "); // Palavra digitada pelo jogador 1  
	
		palavra= palavra.trim(); // Retira espaços no inicio e no fim da string			
		dica=prompt("Diga qual a dica."); // Dica digitada pelo jogador 1
	
			for(j = 0; j < palavra.length; j++){   // Soma de texto, para um texto final  
				
				resp[j] = "_ ";
				
				if(palavra[j]!=" "){
					resp2=resp2+"_ ";
				 } 
				   else {
						resp2=resp2+ "-";
					}
									
						if(palavra[j]==" "){	
							r[j]=-1;
					    } 
							else {
								r[j]= 0; 
							}	
						 
			}
				//Condição de até quando ele vai rodar o programa (para cada partida)  			 
				while(ganhou == false && erros < 6){ 
													
					letra = prompt("Letras usadas\n"+usadas+"\n\n O seu número de erro(s) é = "+
					erros +"\n\n"+resp2+"\n\n Jogador 2, Digite uma letra\n"+
					" ou digite resp para inserir a palava \n\n Dica: "+dica);
						resp2="";
								
						if(letra=="resp"){
							p = prompt("Digite a palavra");
							if(p == palavra){
								ganhou = true;
							}	else {
								 ganhou = false;
							}
						} 
							else {
								for(jj = 0; jj < 27; jj++){
									if(letra==usadas[jj]){
										letra = prompt("digite outra letra");
										jj = -1;
									}
								}
									
									resp2="";

									usadas[i] = letra;
									i++;
										
									entrou = 0;
									
									for(k = 0; k < palavra.length; k++){
										
										if(palavra[k] == letra){
											resp[k] = letra;
											entrou ++;
											r[k]=1;  
										} 
											if(r[k]==0){
									  
												resp2=resp2+"_ ";
											}
											  else if(r[k]==-1){
												resp2=resp2+"-";
											  }
												else  {
													resp2=resp2+palavra[k];
												}              	
									}
										// Contagem das letras usadas 
										for (m = 0; m < i; m++){
											if(usadas[m] == letra){
												contagem++;
											}
										}
										// Contagem dos erros 	
											if (j>0){
												if(entrou == 0  && contagem>0){
													erros++;
												}
											}
											
				/* Testa se o jogador 2 ganhou(iguais so permanecera sendo true se o for
				não encontrar nenhum elemento diferente "palavra" e "resp")*/
							  iguais = true;
							  for(ii=0;ii<palavra.length;ii++){
								  
								  if(resp[ii]!=palavra[ii]){
									  iguais = false;
								  }          
							  }
							 
								if(iguais){
									ganhou = true
								}	
					 }
				} 		 
				// Impressão do vencedor do jogo
					if (erros>=6){
						alert("Jogador 1 ganhou! \n \n A palavra correta era: " + palavra);
					}
						else{
							alert("Jogador 2 ganhou");
						}
				// Opção de jogar novamente
							jogarNovamente = prompt("Digite 1 para jogar novamente e 2 para acabar o jogo");

							while(jogarNovamente < 1 || jogarNovamente > 2){
								jogarNovamente = prompt("Digite 1 para jogar novamente e 2 para acabar o jogo");

							} 
						
	}  while(jogarNovamente == 1);
			

}
