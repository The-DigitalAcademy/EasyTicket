PGDMP         &                {            eTicket    14.5    14.5 	               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    49220    eTicket    DATABASE     T   CREATE DATABASE "eTicket" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE "eTicket";
                postgres    false            �            1259    49222    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    fullname text,
    email text,
    password text,
    amount double precision,
    status text DEFAULT 'active'::text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    49229    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    209                      0    49222    users 
   TABLE DATA           N   COPY public.users (id, fullname, email, password, amount, status) FROM stdin;
    public          postgres    false    209   y                  0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 7, true);
          public          postgres    false    210            �           2606    49228    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    209               �   x�M�=N�@F�[p���x~�q JJ��7�fW$ 힞D��z�{����n�a�?����q���!F
�HG)��sDN�%9r���>쾵e���a$F�,-�n�(�����7���v/�L3�j��*�	\i`�$4��!�=��g|���Ǐ��.�2���	��r������{�X(M�     