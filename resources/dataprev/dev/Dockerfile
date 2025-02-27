# syntax=docker/dockerfile:1
FROM php:8.1-apache
# instala recursos adicionais
RUN apt-get update
RUN apt-get install -y sed
RUN apt-get install -y vim
RUN apt-get install -y git
RUN apt-get install -y zlib1g-dev
RUN apt-get install -y libzip-dev
RUN apt-get install -y unzip
RUN apt-get install -y curl
RUN apt-get install -y libcurl4-openssl-dev
RUN apt-get install -y openssl
RUN apt-get install -y libssl-dev
RUN apt-get install -y libxml2-dev
RUN apt-get install -y sudo
RUN apt-get install -y chrony
RUN apt-get install -y libpng-dev
RUN apt-get install -y libjpeg-dev
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install mysqli
RUN docker-php-ext-enable pdo_mysql
RUN docker-php-ext-install soap
RUN docker-php-ext-install curl
RUN docker-php-ext-install gd
# Instalar openssl utilizando um workaround
RUN docker-php-ext-install openssl || true
RUN cp /usr/src/php/ext/openssl/config0.m4 /usr/src/php/ext/openssl/config.m4
RUN docker-php-ext-install openssl
# cria diretorio do document-root
WORKDIR /var/www
RUN mkdir /etc/apache2/ssl
# Copiar arquivos de configuração e certificado digital
COPY ../resources/docker/producao/configuracoes/apache2/apache2.conf /etc/apache2/apache2.conf
COPY ../resources/docker/producao/configuracoes/php/php_production.ini /usr/local/etc/php/php.ini
COPY ../resources/docker/producao/configuracoes/php/cacert.pem /usr/local/etc/php/cacert.pem
COPY ../resources/docker/producao/configuracoes/apache2/ssl-params.conf /etc/apache2/conf-available/ssl-params.conf
COPY ../resources/docker/producao/configuracoes/apache2/default-ssl.conf /etc/apache2/sites-available/default-ssl.conf
COPY ../resources/docker/producao/configuracoes/certificados/certificate.crt /etc/apache2/ssl/certificate.crt
COPY ../resources/docker/producao/configuracoes/certificados/private.key /etc/apache2/ssl/private.key
COPY ../resources/docker/producao/configuracoes/chrony/chrony.conf /etc/chrony/chrony.conf
# copia arquivos de configuracao
COPY ../resources/dataprev/dev/apache2.conf /etc/apache2/apache2.conf
COPY ../resources/dataprev/dev/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ../resources/dataprev/dev/cacert.pem /usr/local/etc/php/cacert.pem
# instala o composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
# habilita o modulo rewrite
RUN a2enconf ssl-params
RUN a2enmod ssl
RUN a2enmod rewrite
RUN a2enmod headers
RUN a2ensite default-ssl
# Rodar script com configurações do modo produção
RUN service chrony restart
COPY ../resources/dataprev/dev/setup_production.sh /root/setup_production.sh
RUN chmod a+x /root/setup_production.sh
RUN /root/setup_production.sh
#Instalacao
# Copia do projeto back
COPY ../../../back-end/ ./
# Configure as permissões do diretório temporário
RUN chmod -R 1777 /tmp
# Configure as permissões do diretório do seu projeto
RUN chmod -R 755 ./
RUN composer install --optimize-autoloader --no-dev
COPY ../resources/dataprev/dev/entrypoint.sh ./entrypoint.sh

# Alterando permissoes
RUN chmod +x /var/www/entrypoint.sh
RUN chown -R www-data:www-data /var/www
RUN sudo chmod 775 /var/www/storage -R
RUN sudo chmod 775 /var/www/public

# Exponha a porta 80 para o servidor Apache
EXPOSE 80

CMD [ "sh", "-c", "/var/www/entrypoint.sh; /usr/local/bin/apache2-foreground" ]
