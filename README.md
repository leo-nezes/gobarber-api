# Recuperação de senha

**Requisitos Funcionais (RF)**
Funcionalidades dentro da recuperação de senha.

- Usuário deve poder recuperar a sua senha informando o seu e-mail;
- Usuário deve receber um email com instruções de recuperação de senha;
- Usuário deve poder resetar a sua senha;

**Requisitos Não Funcionais (RNF)**
Seviços não ligados diretamente com a regra de negócios da aplicação. Ex: serviço de email será feito com a biblioteca Node Mailer.

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails devem acontecer em segundo plano (background job);

**Regras de Negócios (RN)**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha para resertar a atual;


# Atualização de perfil

**RF**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviço

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de uma mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores devem ser armazenadas em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário passado;
- O usuário não pode agendar serviços consigo mesmo;
