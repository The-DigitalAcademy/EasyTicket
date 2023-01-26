PGDMP         2                 {            eTicket    14.5    14.5 ,    0           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            1           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            2           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            3           1262    49220    eTicket    DATABASE     T   CREATE DATABASE "eTicket" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE "eTicket";
                postgres    false            P           1247    49288    usertype    TYPE     J   CREATE TYPE public.usertype AS ENUM (
    'inspector',
    'passenger'
);
    DROP TYPE public.usertype;
       public          postgres    false            �            1259    49243 	   comp_info    TABLE     �   CREATE TABLE public.comp_info (
    id integer NOT NULL,
    user_id integer,
    company_name text,
    company_logo text,
    company_contact text,
    company_email text,
    company_account text
);
    DROP TABLE public.comp_info;
       public         heap    postgres    false            �            1259    49250    Company_Information_id_seq    SEQUENCE     �   ALTER TABLE public.comp_info ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Company_Information_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    212            �            1259    49293    boarding    TABLE     �   CREATE TABLE public.boarding (
    id integer NOT NULL,
    user_id integer,
    trip_id integer,
    departed_from text,
    travelled_to text,
    "tokens_Used" double precision
);
    DROP TABLE public.boarding;
       public         heap    postgres    false            �            1259    49300    boarding_id_seq    SEQUENCE     �   ALTER TABLE public.boarding ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.boarding_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    49258    invoice    TABLE     g   CREATE TABLE public.invoice (
    id integer NOT NULL,
    user_id integer,
    proof text NOT NULL
);
    DROP TABLE public.invoice;
       public         heap    postgres    false            �            1259    49312    invoice_id_seq    SEQUENCE     �   ALTER TABLE public.invoice ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.invoice_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    49233    trip    TABLE     �   CREATE TABLE public.trip (
    id integer NOT NULL,
    user_id integer,
    departing_from text,
    travelling_to text,
    price numeric
);
    DROP TABLE public.trip;
       public         heap    postgres    false            �            1259    49251    trip_trip_id_seq    SEQUENCE     �   ALTER TABLE public.trip ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.trip_trip_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    211            �            1259    49222    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    firstname text,
    lastname text,
    email text,
    password text,
    account_type public.usertype
);
    DROP TABLE public.users;
       public         heap    postgres    false    848            �            1259    49229    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    209            �            1259    49252    wallet    TABLE     m   CREATE TABLE public.wallet (
    id integer NOT NULL,
    amount double precision,
    user_id_fk integer
);
    DROP TABLE public.wallet;
       public         heap    postgres    false            �            1259    49257    wallet_id_seq    SEQUENCE     �   ALTER TABLE public.wallet ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.wallet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            +          0    49293    boarding 
   TABLE DATA           d   COPY public.boarding (id, user_id, trip_id, departed_from, travelled_to, "tokens_Used") FROM stdin;
    public          postgres    false    218   �/       %          0    49243 	   comp_info 
   TABLE DATA           }   COPY public.comp_info (id, user_id, company_name, company_logo, company_contact, company_email, company_account) FROM stdin;
    public          postgres    false    212   �/       *          0    49258    invoice 
   TABLE DATA           5   COPY public.invoice (id, user_id, proof) FROM stdin;
    public          postgres    false    217   0       $          0    49233    trip 
   TABLE DATA           Q   COPY public.trip (id, user_id, departing_from, travelling_to, price) FROM stdin;
    public          postgres    false    211   �0       "          0    49222    users 
   TABLE DATA           W   COPY public.users (id, firstname, lastname, email, password, account_type) FROM stdin;
    public          postgres    false    209   1       (          0    49252    wallet 
   TABLE DATA           8   COPY public.wallet (id, amount, user_id_fk) FROM stdin;
    public          postgres    false    215   �1       4           0    0    Company_Information_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."Company_Information_id_seq"', 2, true);
          public          postgres    false    213            5           0    0    boarding_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.boarding_id_seq', 1, false);
          public          postgres    false    219            6           0    0    invoice_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.invoice_id_seq', 2, true);
          public          postgres    false    220            7           0    0    trip_trip_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.trip_trip_id_seq', 7, true);
          public          postgres    false    214            8           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    210            9           0    0    wallet_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.wallet_id_seq', 1, false);
          public          postgres    false    216            �           2606    49249 "   comp_info Company_Information_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.comp_info
    ADD CONSTRAINT "Company_Information_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.comp_info DROP CONSTRAINT "Company_Information_pkey";
       public            postgres    false    212            �           2606    49299    boarding boarding_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.boarding
    ADD CONSTRAINT boarding_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.boarding DROP CONSTRAINT boarding_pkey;
       public            postgres    false    218            �           2606    49262    invoice invoice_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.invoice DROP CONSTRAINT invoice_pkey;
       public            postgres    false    217            �           2606    49239    trip trip_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.trip
    ADD CONSTRAINT trip_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.trip DROP CONSTRAINT trip_pkey;
       public            postgres    false    211            �           2606    49228    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    209            �           2606    49256    wallet wallet_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.wallet
    ADD CONSTRAINT wallet_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.wallet DROP CONSTRAINT wallet_pkey;
       public            postgres    false    215            �           1259    49311    fki_trip_id_fk    INDEX     F   CREATE INDEX fki_trip_id_fk ON public.boarding USING btree (trip_id);
 "   DROP INDEX public.fki_trip_id_fk;
       public            postgres    false    218            �           1259    49268    fki_user_id    INDEX     D   CREATE INDEX fki_user_id ON public.wallet USING btree (user_id_fk);
    DROP INDEX public.fki_user_id;
       public            postgres    false    215            �           1259    49274    fki_user_id_fk    INDEX     B   CREATE INDEX fki_user_id_fk ON public.trip USING btree (user_id);
 "   DROP INDEX public.fki_user_id_fk;
       public            postgres    false    211            �           2606    49306    boarding trip_id_fk    FK CONSTRAINT     q   ALTER TABLE ONLY public.boarding
    ADD CONSTRAINT trip_id_fk FOREIGN KEY (trip_id) REFERENCES public.trip(id);
 =   ALTER TABLE ONLY public.boarding DROP CONSTRAINT trip_id_fk;
       public          postgres    false    211    3462    218            �           2606    49263    wallet user_id    FK CONSTRAINT     p   ALTER TABLE ONLY public.wallet
    ADD CONSTRAINT user_id FOREIGN KEY (user_id_fk) REFERENCES public.users(id);
 8   ALTER TABLE ONLY public.wallet DROP CONSTRAINT user_id;
       public          postgres    false    209    3459    215            �           2606    49269    trip user_id_fk    FK CONSTRAINT     n   ALTER TABLE ONLY public.trip
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);
 9   ALTER TABLE ONLY public.trip DROP CONSTRAINT user_id_fk;
       public          postgres    false    211    3459    209            �           2606    49277    invoice user_id_fk    FK CONSTRAINT     q   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);
 <   ALTER TABLE ONLY public.invoice DROP CONSTRAINT user_id_fk;
       public          postgres    false    3459    217    209            �           2606    49282    comp_info user_id_fk    FK CONSTRAINT     s   ALTER TABLE ONLY public.comp_info
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);
 >   ALTER TABLE ONLY public.comp_info DROP CONSTRAINT user_id_fk;
       public          postgres    false    212    209    3459            �           2606    49301    boarding user_id_fk    FK CONSTRAINT     r   ALTER TABLE ONLY public.boarding
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);
 =   ALTER TABLE ONLY public.boarding DROP CONSTRAINT user_id_fk;
       public          postgres    false    218    209    3459            +      x������ � �      %   H   x�3�4�tM,�T�L�N-�L����F�&&��@���Cznbf�^r~.������������W� 3��      *   k   x���M@  �ӣ�3����M��Tz�28�S���ȶ�� �>�l}Rx����;P[$����\5$�^*���)����
�a�[��|@�`2�{�I-L��O�1��TB�      $   w   x�3�4�t�II-JL�WH,��tvr�4��30�2�嗤&*���Ad�@2�@�������D��&#��)P*�E��%H�"�^�Z���W�ih
5���$f��e��s������ 2|'      "   �   x�M��
�@�����pm^r�]��!�6�頢��h}��Z���w@�4ӂЗ5v85?�U=6�)T�S�el��ۭ(�,	� �}�\��Z�<��1����~���
N7̇�EpIV����N�Ǣ`��$��)�b;�ڃF��Iiv7co�o5�      (      x������ � �     