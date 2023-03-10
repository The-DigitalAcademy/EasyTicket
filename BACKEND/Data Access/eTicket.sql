PGDMP         	                {            eTicket    14.5    14.5 :    R           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            S           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            T           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            U           1262    49220    eTicket    DATABASE     T   CREATE DATABASE "eTicket" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE "eTicket";
                postgres    false            Q           1247    49288    usertype    TYPE     J   CREATE TYPE public.usertype AS ENUM (
    'inspector',
    'passenger'
);
    DROP TYPE public.usertype;
       public          postgres    false            ?            1259    49243 	   comp_info    TABLE     ?   CREATE TABLE public.comp_info (
    id integer NOT NULL,
    user_id integer,
    company_name text,
    company_logo text,
    company_contact text,
    company_email text,
    company_account text
);
    DROP TABLE public.comp_info;
       public         heap    postgres    false            ?            1259    49250    Company_Information_id_seq    SEQUENCE     ?   ALTER TABLE public.comp_info ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Company_Information_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    212            ?            1259    49293    boarding    TABLE     ?   CREATE TABLE public.boarding (
    id integer NOT NULL,
    user_id integer,
    trip_id integer,
    departed_from text,
    travelled_to text,
    "tokens_Used" double precision
);
    DROP TABLE public.boarding;
       public         heap    postgres    false            ?            1259    49300    boarding_id_seq    SEQUENCE     ?   ALTER TABLE public.boarding ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.boarding_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            ?            1259    57419 	   complains    TABLE     ?   CREATE TABLE public.complains (
    id integer NOT NULL,
    user_id integer,
    complains text,
    created_at date DEFAULT CURRENT_TIMESTAMP,
    date_created timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.complains;
       public         heap    postgres    false            ?            1259    57426    complains_id_seq    SEQUENCE     ?   ALTER TABLE public.complains ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.complains_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            ?            1259    49233    destination    TABLE     d   CREATE TABLE public.destination (
    id integer NOT NULL,
    user_id integer,
    address text
);
    DROP TABLE public.destination;
       public         heap    postgres    false            ?            1259    57450    historytrip    TABLE     ?   CREATE TABLE public.historytrip (
    id integer NOT NULL,
    user_id integer,
    depart_to text,
    created_at date DEFAULT CURRENT_TIMESTAMP,
    tokens double precision
);
    DROP TABLE public.historytrip;
       public         heap    postgres    false            ?            1259    57457    history_id_seq    SEQUENCE     ?   ALTER TABLE public.historytrip ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    226            ?            1259    49258    payment    TABLE     v   CREATE TABLE public.payment (
    id integer NOT NULL,
    user_id integer,
    proof text NOT NULL,
    date date
);
    DROP TABLE public.payment;
       public         heap    postgres    false            ?            1259    49312    invoice_id_seq    SEQUENCE     ?   ALTER TABLE public.payment ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.invoice_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            ?            1259    57412    save    TABLE     ]   CREATE TABLE public.save (
    id integer NOT NULL,
    user_id integer,
    address text
);
    DROP TABLE public.save;
       public         heap    postgres    false            ?            1259    57440    trip    TABLE     ?   CREATE TABLE public.trip (
    id integer NOT NULL,
    departing_from text,
    departing_to text,
    price double precision
);
    DROP TABLE public.trip;
       public         heap    postgres    false            ?            1259    57447    trip_id_seq    SEQUENCE     ?   ALTER TABLE public.trip ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.trip_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    224            ?            1259    49251    trip_trip_id_seq    SEQUENCE     ?   ALTER TABLE public.destination ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.trip_trip_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    211            ?            1259    49222    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    fullname text,
    email text,
    password text,
    amount double precision,
    status text DEFAULT 'active'::text,
    created_at date
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    49229    users_id_seq    SEQUENCE     ?   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    209            ?            1259    49252    wallet    TABLE     j   CREATE TABLE public.wallet (
    id integer NOT NULL,
    amount double precision,
    user_id integer
);
    DROP TABLE public.wallet;
       public         heap    postgres    false            ?            1259    49257    wallet_id_seq    SEQUENCE     ?   ALTER TABLE public.wallet ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.wallet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            F          0    49293    boarding 
   TABLE DATA           d   COPY public.boarding (id, user_id, trip_id, departed_from, travelled_to, "tokens_Used") FROM stdin;
    public          postgres    false    218   ?=       @          0    49243 	   comp_info 
   TABLE DATA           }   COPY public.comp_info (id, user_id, company_name, company_logo, company_contact, company_email, company_account) FROM stdin;
    public          postgres    false    212   ?=       J          0    57419 	   complains 
   TABLE DATA           U   COPY public.complains (id, user_id, complains, created_at, date_created) FROM stdin;
    public          postgres    false    222   C>       ?          0    49233    destination 
   TABLE DATA           ;   COPY public.destination (id, user_id, address) FROM stdin;
    public          postgres    false    211   ?       N          0    57450    historytrip 
   TABLE DATA           Q   COPY public.historytrip (id, user_id, depart_to, created_at, tokens) FROM stdin;
    public          postgres    false    226   C@       E          0    49258    payment 
   TABLE DATA           ;   COPY public.payment (id, user_id, proof, date) FROM stdin;
    public          postgres    false    217   ?A       I          0    57412    save 
   TABLE DATA           4   COPY public.save (id, user_id, address) FROM stdin;
    public          postgres    false    221   _B       L          0    57440    trip 
   TABLE DATA           G   COPY public.trip (id, departing_from, departing_to, price) FROM stdin;
    public          postgres    false    224   |B       =          0    49222    users 
   TABLE DATA           Z   COPY public.users (id, fullname, email, password, amount, status, created_at) FROM stdin;
    public          postgres    false    209   ?C       C          0    49252    wallet 
   TABLE DATA           5   COPY public.wallet (id, amount, user_id) FROM stdin;
    public          postgres    false    215   ?D       V           0    0    Company_Information_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."Company_Information_id_seq"', 2, true);
          public          postgres    false    213            W           0    0    boarding_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.boarding_id_seq', 1, false);
          public          postgres    false    219            X           0    0    complains_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.complains_id_seq', 8, true);
          public          postgres    false    223            Y           0    0    history_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.history_id_seq', 60, true);
          public          postgres    false    227            Z           0    0    invoice_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.invoice_id_seq', 38, true);
          public          postgres    false    220            [           0    0    trip_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.trip_id_seq', 6, true);
          public          postgres    false    225            \           0    0    trip_trip_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.trip_trip_id_seq', 43, true);
          public          postgres    false    214            ]           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 11, true);
          public          postgres    false    210            ^           0    0    wallet_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.wallet_id_seq', 14, true);
          public          postgres    false    216            ?           2606    49249 "   comp_info Company_Information_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.comp_info
    ADD CONSTRAINT "Company_Information_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.comp_info DROP CONSTRAINT "Company_Information_pkey";
       public            postgres    false    212            ?           2606    49299    boarding boarding_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.boarding
    ADD CONSTRAINT boarding_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.boarding DROP CONSTRAINT boarding_pkey;
       public            postgres    false    218            ?           2606    57425    complains complains_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.complains
    ADD CONSTRAINT complains_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.complains DROP CONSTRAINT complains_pkey;
       public            postgres    false    222            ?           2606    57456    historytrip history_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.historytrip
    ADD CONSTRAINT history_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.historytrip DROP CONSTRAINT history_pkey;
       public            postgres    false    226            ?           2606    49262    payment invoice_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.payment
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.payment DROP CONSTRAINT invoice_pkey;
       public            postgres    false    217            ?           2606    57418    save save_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.save
    ADD CONSTRAINT save_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.save DROP CONSTRAINT save_pkey;
       public            postgres    false    221            ?           2606    49239    destination trip_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.destination
    ADD CONSTRAINT trip_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY public.destination DROP CONSTRAINT trip_pkey;
       public            postgres    false    211            ?           2606    57446    trip trip_pkey1 
   CONSTRAINT     M   ALTER TABLE ONLY public.trip
    ADD CONSTRAINT trip_pkey1 PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.trip DROP CONSTRAINT trip_pkey1;
       public            postgres    false    224            ?           2606    49228    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    209            ?           2606    49256    wallet wallet_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.wallet
    ADD CONSTRAINT wallet_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.wallet DROP CONSTRAINT wallet_pkey;
       public            postgres    false    215            ?           1259    49311    fki_trip_id_fk    INDEX     F   CREATE INDEX fki_trip_id_fk ON public.boarding USING btree (trip_id);
 "   DROP INDEX public.fki_trip_id_fk;
       public            postgres    false    218            ?           1259    49268    fki_user_id    INDEX     A   CREATE INDEX fki_user_id ON public.wallet USING btree (user_id);
    DROP INDEX public.fki_user_id;
       public            postgres    false    215            ?           1259    49274    fki_user_id_fk    INDEX     I   CREATE INDEX fki_user_id_fk ON public.destination USING btree (user_id);
 "   DROP INDEX public.fki_user_id_fk;
       public            postgres    false    211            ?           2606    49306    boarding trip_id_fk    FK CONSTRAINT     x   ALTER TABLE ONLY public.boarding
    ADD CONSTRAINT trip_id_fk FOREIGN KEY (trip_id) REFERENCES public.destination(id);
 =   ALTER TABLE ONLY public.boarding DROP CONSTRAINT trip_id_fk;
       public          postgres    false    211    218    3485            ?           2606    49301    boarding user_id_fk    FK CONSTRAINT     r   ALTER TABLE ONLY public.boarding
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);
 =   ALTER TABLE ONLY public.boarding DROP CONSTRAINT user_id_fk;
       public          postgres    false    209    218    3482            F      x?????? ? ?      @   H   x?3?4?tM,?T?L?N-?L????F?&&??@???Cznbf?^r~.????????????W? 3??      J   ?   x???A?0E??)?:?P{?nPG!V??U??6?	????????X7?n~???????]O`?H+?E??"B?U?k!p?q?H?98?!f??:??Ӆ??f?4?Z??W???⿧??R????l?of???6-0??e?T?o?y????~??"JS?7N4J*?-9?/?˅?      ?   1  x????n?0?g?)nl%??C??TU%*? u?r?+X;ulP??S?>/V?J?,??Y????.e??{.ϱw?y????V???|??sk?烘h??Nў˄??@??50?????	6~a????Z?H/?yeJ???b%????'?Fc?Y??&I?X???0zwj?<?ؐM???m.??=EOu&?Z9:?g??->?ߏ??????×????M3w?1KUO?z{?M?<jS?;?5???F?ج??ˏ????????=?V?'G?/?????~?B4K??-?u??????l      N   ?  x???AK?0??s?)ޣB͛?No?A??x??m??d?	c???̃?y??-$???~??V??C
???H?d?+?s3?u?~{K?hh%.?k????n?C??`?=?c
G??C???????!n?rpr??l??Tܲ?j??u%???e??p??????+?P???e???????T??a??_oZ^??W?CJv?=?G/&n?k?W?.?(???.l?????E?n?????79Y?S~yD%t??????????7???????/??x???_?? ?W?????2???/?????2???/?????2???_	???W??+?????Jp%???_	???W?????U??*p??
?_???W????????jp5???_???W????????v???N????KΔ      E   i   x??A?  ?3????.?o???
*?b???o'c&??H??ष??\a9?y+_v?1畾??.\????h-?18??i˕6{?J?/Iq?E?????k?RR??}!?      I      x?????? ? ?      L     x?œ?N?0???)nɪ?4???F]??P6'>?????<Ɠ`(C+1ti??|??w?K??0???j'i7͊A????2،?J??1?u??lu/?B?z?g?,??A????x1ԉ?fp??Y印??^?;(CB??Z4??????/??x???UT?v(I????R~?uOj??????#???~?J^@???x???6???wThI???wD??m?????????L??I?????x:i?z^?q?+?K?      =   ?  x????N?0????6?Iڴ7??đ???,[ע??Ğ???4`??$??O?]??R???Ţ?a)???/N?<x?i?C??
8Li/?Q???F??]?e???o????????D?(?K4?Y???ڸ_??O Q6??Y?b?;??f???L??²?Z?Ρm4[?[??v%iZ?r1??<IX??-???`:??W֋
!lS?{??x?_???F????%olN?H???[? ???cI6'?Z?-[9kyFf/?R?p??????$E?}a???????[[ygt?a?<[???`?#T|?XL?a??_???z?+??]#??      C      x?34?450020?4?????? ??     