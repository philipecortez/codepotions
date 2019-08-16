---
title: 'Como instalar o Ubuntu no VirtualBox'
date: '2019-08-15T11:53:00.12Z'
img: 'virtualbox-logo.jpg'
description: 'Aprenda a instalar o Ubuntu em uma vm'
id: 2
backgroundColor: '#1bbc9b'
---
## Introducao a serie sobre linux

Nessa serie de posts irei demonstrar como instalar o Linux, como utilizar a linha de comando, como e onde buscar por informacoes em caso de duvida ou problemas e muito mais. O intuito disso tudo e desmistificar essa aura de dificuldade que o Linux apresenta para muitas pessoas e demonstrar como esse sistema pode ser facil de utilizar e incrivelmente poderoso.

## Instalando o Ubuntu no Virtualbox

Para comecar a nossa jornada o primeiro passo e fazer a instalacao do sistema, existem varias maneiras de se instalar o Linux como por exemplo: instalar como unico sistema operacional da sua maquina, instalar em dual boot com windows(ou outro sistema) e instalar o Linux em uma maquina virtual.

No nosso caso iremos instalar o sistema em uma maquina virtual, a principal vantagem desse metodo para nos consiste em podermos instalar o sistema sem o risco de comprometer a instalacao do sistema operacional que ja esta instalado na nossa maquina, alem de que podemos fazer absolutamente tudo no sistema que estara rodando na maquina virtual inclusive quebrar o sistema e tornalo inutilizavel o que e otimo para quem esta aprendendo.

### Entendendo o VirtualBox

O VirtualBox e um software de virtualizacao(hypervisor) completamente gratuito e que roda em cima de um sistema operacional existente, a sua funcao e simular uma maquina real de maneira que um sistema operacional convidado 'acredita' que esta rodando em uma maquina fisica so sua.

![logo](./hosted-hypervisor.png)


Ao utilizarmos o VirtualBox para criar uma maquina virtual na qual iremos instalar o Linux iremos criar um ambiente completamente isolado da nossa maquina fisica o que como dito anteriormente nos dara um alto grau de liberdade para fazermos todo tipo de experimentacao sem comprometer a nossa maquina fisica.

Existem outros tipos de virtualizacao e de virtualizadores mas como esse nao e o topico principal dos nossos estudos resolvi disponibilizar alguns links que explicam mais sobre o assunto [aqui](https://www.redhat.com/pt-br/topics/virtualization/what-is-virtualization) e [aqui](https://pt.wikipedia.org/wiki/Hipervisor).


### Instalacao do VirtualBox

Irei demonstrar a seguir a instalacao do VirtualBox no Windows 10 e no Ubuntu, nao irei demonstrar a instalacao do mesmo no Mac OSX pois nao tenho acesso facil atualmente a nenhum Mac, porem coloquei logo abaixo um link para um tutorial que ensina a fazer o procedimento no Mac OSX.

- [Windows](#Windows)

- [Ubuntu](#Ubuntu)

- [Mac OSX](https://matthewpalmer.net/blog/2017/12/10/install-virtualbox-mac-high-sierra/index.html)

####<a name="Windows"></a> Windows

Primeiramente acesse o esse [link](https://download.virtualbox.org/virtualbox/6.0.10/VirtualBox-6.0.10-132072-Win.exe) e baixe o executavel do VirtualBox, aguarde a conclusao do download e em seguida inicie o instalador.

![Instalador Windows](./instalador1.png)

A partir desse momento va clicando em next ate a seguinte tela aparecer

![Instalador Windows Aviso](./instalador2.png)

Nao se assuste clique em Yes e siga em frente, ao fim uma tela ira aparecer solicitando que voce finalize o processo e inicie a aplicacao

![Instalador Windows Fim](./instalador3.png)

####<a name="Ubuntu"></a> Ubuntu

Acesse a Ubuntu Software Manager e no menu de busca procure por **virtualbox** 

![Instalador Ubuntu](./instalador4.png)

Clique em **VirtualBox** e em seguida clique no botao **install** e coloque sua senha como na imagem abaixo

![Instalador Ubuntu Senha](./instalador6.png)

Apos isto basta clicar em **launch** e pronto!

![Instalador Ubuntu Fim](./instalador7.png)

