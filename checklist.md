# Setup Inicial de jum repositório do GitHub no Visual Studio Code local

1. Limpar credenciais do sistema
2. Limpar os dados do naegador
3. Abrir o repositório no GitHub
4. Copair a URL do repositório (HTTPS)
5. Abrir o VS Code
6. Swe houver algum projeto aberto no VS Code, então feche (CNTRL + K, depois F)
7. Se houver algum usuário logado no VS Code, então clique em 'Sair'
8. Verifique as variáveis `user.name` e `user.email` globais:

~~~bash
git config --global user.name
git config --global user.email

~~~
9. Se as variáveis retornarem algum valor, redefina ambas as variáveis:
~~~bash
git config --global --unset user.name
git config --global --unset user.email
~~~
10. Faça a clonagem do repositório no computador local:
~~~bash
git clone https://github.com/usuario/repositório.git
~~~
11. Abra o projeto no VS code
~~~bash
code -r <repositorio_local>/
~~~
12. Faça login no VS code local para sincronizar suas extensões e temas
13. Ative o salvamento automático _(Auto Save)_: Arquivo > Salvamento