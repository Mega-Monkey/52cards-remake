import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Banner } from "../components/Banner";
import "./Introduction.css"

export const Introduction = () => {
  return (
    <Fragment>
      <Banner />
      <div className="intro-container">
      <section className="text-section">
        <div>
          <h1>How to memorise a deck of cards</h1>
          <p>
          The following is and slightly edited chapter from Darren Browns book Tricks of the Mind. It will explain to you clear and in great detail. How to memorise a deck of card in order.
          </p>
          <p>
          We are going to begin by turning the digits from 0 to 9 into common consonants. The choice of letters will be dictated only by
          which consonant we can connect most easily with that number. And
          occasionally we give ourselves a useful alternative. The following is
          the list I use, and I shall explain each one: 
          </p>

          <p>
          0-z/s: ('z' is in 'zero', and the os' sound is most similar to 'z')
          <br />
          1 -1 : (they look similar)
          <br />
          2 - n : (two downward strokes similar sounds)
          <br />
          3 - m : (three downward strokes)
          <br />
          4 - r : (fou'r')
          <br />
          5 - f/v : ('fi'v'e: again, they are)
          <br />
          6 - b/p : ('b' looks similar to 6, and'p'and'b'sound and look most similar) 
          <br />
          7 - T : (7 and capital 'T' kind of look similar, especially the way I write my 'T's)
          <br />
          8 - chi: (because of the 'gh' in sh/j 'eighf, and then 'j'is the nearest to these sounds)
          <br />
          9 - g : (again, a written 'g' can resemble a 9) 
          </p>

          <p>
            Read through that list a few times and check that it makes sense
          for you. Then cover the page and see if you can remember them all.
          Once you have them, please carryon. 
          </p>

          <p>
          Now, lefs imagine you have to remember a new PIN number:
          1743. (If that is indeed your PIN number, please don't hesitate to be
          hugely impressed and immediately call the news.) You can represent those digits as LTRM. Now, you need only turn those four
          letters into a word or phrase to remember the number. Essentially
          you add vowel sounds to see what you get. I would think of 'light
          Room', or 'Le Tram'. As soon as you have one,link it to the idea of
          getting money out of the cash machine, and you're done. For example, for 'light Room', you might imagine a cash machine in a room
          with white walls and lots of lights, or for 'Le Tram', getting out of a
          tram in France to grab some euros. Now you have that image, you
          don't need to worry about remembering the number. Just let the
          image of the cash machine trigger the picture of the tram and
          decode it. When adding letters to make a memorable word or
          words, just be careful not to use any other letters that are already
          used in the system. It's best to stick to vowels, 'h's and Ys. 
          </p>

          <p>
          Recently I went through the process of changing banks and had
          to remember several new PIN numbers for the new bank. First I
          turned each number into a word or two, as above. To continue with
          the 1743 example, for my business current account I would have
          imagined myself wearing a very nice business suit as I stepped off
          that French tram. The picture for my personal current account, on
          the other hand, would have involved me in my normal clothes. 
          </p>

          <p>
          By now youl1 have realized that if any of this sounds ridiculous,
          that really is the point. By spending a few seconds fixing these odd
          images in your head you are working in tandem with the way our
          brains make connections, as opposed to the supposedly more 'sensible' (and less effective) ways in which we are normally expected
          to try to remember information. 
          </p>
          <p>
          There is another way of looking at the peg system. Let us return
          to our list and imagine we wish to learn which word comes at each
          number. That way, instead of just reciting the list, you could have
          your by now quite fascinated friend call out any number and you
          would be able to tell him the corresponding word. Similarly, you
          might need to attach numbers, dates or scores to names or places -
          the same system applies. Well, we're now able to use the peg letters
          's', '1', 'n', 'm' and so on to form word-images for the numbers in a
          way that will allow us to move into double digits with ease. Let's
          take our letters for 0 to 9 and add a few vowels or soft consonants to
          turn them into words. These are the words I use: 
          </p>
          <p>
          0-z/s: zoo
          <br />
          1-1 : ale 
          <br />
          2-n : hen 
          <br />
          3-m : ham 
          <br />
          4-r : hair 
          <br />
          5-f/v : hive
          <br />
          6-b/p : bee
          <br />
          7-T : tea
          <br />
          8-ch/sh/j : shoe
          <br />
          9-g : goo
          </p>
          <p>
          Now, as we get into double digits, we combine the letters in the
          way you already know, and form more words. Here is my list from
          10 to 52, which means I can show you how to use the system in conjunction with a deck of cards. Notice that 18, 'ledge', has turned the
          'ch' into a 'j' sound because it's the most similar. I could have used
          the word 'latch', but a ledge is rather easier to visualize than a latch,
          and simpler to use in conjunction with other images. 
          </p>
          <p>
          10-1, zls : lice 
          <br />
          11-1, I : lily 
          <br />
          12-I, n : line 
          <br />
          13-I, m : lime 
          <br />
          14-1, r : lorry 
          <br />
          15-I, f/v : laugh 
          <br />
          16-1, blp : lip 
          <br />
          17-I, t : light 
          <br />
          18-I, ch/sh/j : ledge
          <br /> 
          19-I, g : leg 
          <br />
          20-n, zls : nose
          <br />
          21-n, I : nail
          <br />
          22-n,n : nanny
          <br />
          23-n, m : gnome
          <br />
          24-n, r : Nero
          <br />
          25-n, f/v : knife
          <br />
          26-n, b/p : nob
          <br />
          27-n, t : knight
          <br />
          28-n, chI sh/j : notch
          <br />
          29-n, g : nag
          <br />
          30-m,z/s : moss 
          <br />
          31-m,1 : mail 
          <br />
          32-m,n : money 
          <br />
          33-m, m : mum 
          <br />
          34-m,r : merry 
          <br />
          35-m, flv : muff 
          <br />
          36-m, hlp : map 
          <br />
          37-m, t : mat 
          <br />
          38-m, chi sh/j: match 
          <br />
          39-m,g : mag 
          <br />
          40-r,z/s : rose 
          <br />
          41-r, 1 : rail 
          <br />
          42-r, n : rain
          <br />
          43-r,m : ram
          <br />
          44-r,r : roar
          <br />
          45-r, flv : rave
          <br />
          46-r, hlp : rub
          <br />
          47-r, t : root
          <br />
          48-r, chi sh/j : retch
          <br />
          49-r, g : rag
          <br />
          50-f/v, zls : fuse
          <br />
          51-flv, I : fall
          <br />
          52-flv, n : fan
          </p>
          <p>
          Obviously each group of ten will start with the same sound,
          which makes things a little quicker to learn: all of the twenties, for
          example, begin with the en' sound. You will find that one or two better alternatives suggest themselves to you in place of the ones 1 suggest here, in which case by all means change them. For example,
          my word for 44 is actually not 'roar', as I've given it here, but 'Rory',
          after the soundman in our film crew. So change them for whatever
          works for you, but be careful not to add 'fill-in' letters which stand
          for other numbers, otherwise you'll get into trouble. And do make
          sure that the pictures are easy to visualize. 
          </p>
          <p>
          This is something I have used many times. Sometimes it can work
          as a stand-alone feat, at other times as a hidden technique for a kind
          of card trick. Bear in mind that sometimes in my performances I
          pretend to use memory skills but don't; and sometimes I use a lot
          of memory work but pretend it's something else. At other times I'm
          perfectly honest illtimately, it's the overall eitect that interests me
          most, and I take my cue from that.
          Let's imagine you have shuffled a deck of cards and wish to memorize them in the new order. If you want merely to rattle off all
          fifty-two cards in that order, then the linking system would work
          best for you. But if it is important to know the position of each card,
          then you need to attach each to its number, one through fifty-two.
          But how can you use either system with playing cards? The answer,
          perhaps not surprisingly by now, is to turn each card into a wordimage. The process is as follows. Let us imagine that the first card
          of the deck as you look at the faces is the nine of hearts - 9H.
          Firstly, say it to yourself as 'Heart Nine: H9'. Now we make a word,
          beginning with H and using the peg letter for 9, which is ... (can
          you remember?) ... 'g'. So we make the word 'hag', for example.
          Could also be 'hug', but 'hag' might be easier to visualize in the long
          run. Then we connect 'hag' with our peg for its position (1 or '1',
          which -gives us 'ale') and we have an image of a hag, or a witch,
          drinking a pint of beer. 
          </p>
          <p>
          Reverse 6S = S6
          <br />
          Use peg to create a word: S6 = S+b/p = sob
          <br />
          Use peg to code the position: 2 (second card) = hen
          <br />
          Now link 'sob' (6S) with 'hen' (2): our image is of a sobbing hen. 
          </p>
          <p>
          So, at this point, if you needed to know what card comes in
          the first position, you would conjure up a picture of ale (1) and
          see where it took you (an old hag drinking it). The 'hag' would
          then be decoded as hearts/nine (it11 take you a few seconds at
          first), and you would know that the first card is the nine of
          hearts. Similarly, if you were asked what position the six of spades
          occupied in the deck, you would find the picture for this card
          (S6 = s+b/p = 'sob') and then you'd quickly see a hen sobbing. 'Hen'
          could then quickly be turned back into a 2, and that would give you
          the position. I'm sure this seems impossibly complicated already to you. Feel
          free to skip this section if you don't feel it will ever be of any use.
          But hey, you wanted to know what goes on in my head.
          In a moment I will show you the list of images I use for playing
          cards. There is a small issue with the jacks which I shall explain
          first. As 8 translates into 'chlsh', we have already shown that a 'j'
          sound is close enough to use here too (such as 18 = 'ledge', which
          is better than 'latch' or 'lush'). However, we then have a problem:
          the jack of any suit could be confused with the eight of the same
          suit. For example, the eight of hearts translates as (H8 =
          H+ch/sh/j) 'hedge'. But if we followed the same procedure, the
          jack of hearts would want to do the same: III = Hedge. We'd have
          the same problem with the jacks of all the suits. One way around
          this would be not to use the 'j' option with the eights, and
          have 'hatch', say, instead of 'hedge'. But because I do use the 'j'
          sound in place of an '8' for the positions (e.g. 18 = 'ledge'), this
          would get too confusing. My solution is not to use the peg system
          for jacks and just go straight to an appropriate image. For example,
          because a jack is a boy, I see the jack of hearts as Cupid. I use
          this also with other picture cards: the king and queen of hearts, for
          example, I see as a bridegroom and bride. It's easier and quicker
          than coding and decoding them each time, and allows you to get
          round the difficulty of having to use the 'q' sound with queens.
          Others, like the ace of spades, which has a connection with death, I
          use in a similar way. Feel free to change them if they don't work for
          you. You should be careful, however, not to link cards to wordimages that are already used for the numbered positions, otherwise
          that will also cause confusion.
          Here, then, is the list of images I use for playing cards. I have
          italicized all the words that do not come from the peg code. 
          </p>
          <p>
          AS-Grim Reaper
          <br />
          2S-sun
          <br />
          3S-Sam (a friend; or 'sum)
          <br />
          4S-SOre
          <br />
          SS-safe
          <br />
          6S-sob
          <br />
          7S-soot
          <br />
          8S-sash
          <br />
          9S-ciggy (cigarette)
          <br />
          lOS-sissy
          <br />
          JS-boy digging
          <br />
          QS-housekeeper
          <br />
          KS-gardener 
          </p>
          <p>
          AH-a big love-heart
          <br />
          2H-loverS (not 'hen)
          <br />
          3H-home (not 'ham)
          <br />
          4H-hair (not 'war)
          <br />
          SH-hoof (not 'hive')
          <br />
          6H-hoop
          <br />
          7H-hat
          <br />
          8H-hedge
          <br />
          9H-hag
          <br />
          lOH-horse
          <br />
          JH-Cupid
          <br />
          QH-bride
          <br />
          KH-bridegroom
          </p>
          <p>
          AC-a big club
          <br />
          2C-can
          <br />
          3C-cam (camera)
          <br />
          4C-car
          <br />
          5C-cough
          <br />
          6C-cob (corn on the ... )
          <br />
          7C-cat
          <br />
          8C-cash
          <br />
          9C-cog
          <br />
          lOC-kiss
          <br />
          JC-young guy at a club
          <br />
          QC-brothel madam
          <br />
          KC-bouncer or cock 
          </p>
          <p>
          AD-a big sparkly diamond
          <br />
          2D-dawn
          <br />
          3D-doom
          <br />
          4D-door
          <br />
          SD-dove
          <br />
          6D-dumb
          <br />
          7D-dot
          <br />
          8D-dish
          <br />
          9D-dog
          <br />
          lOD-dizzy
          <br />
          JD-diamond thief
          <br />
          QD-the Queen
          <br />
          KD-an old jeweller 
          </p>
          <p>
          These are the words I would then link to the positions the cards
          occupy in a shuffled or specially arranged deck. Now, when this is
          coupled with apparently shuffling the deck, the end result can be
          quite startling. In an early episode of Mind Control, I had a croupier call out any card in a shuffled deck and I was able to cut straight
          to it while the deck sat on the table. In reality, the deck was shuffled
          using a sequence that brought it back to the memorized order, so
          when she named any card I was able immediately to know its position. Then I had to estimate the correct place to cut to, in order to
          produce the card. While this might sound impossible in itself, it is
          perfectly achievable with practice. I also had some leeway in that
          there was the possibility of producing the card either from the
          underside of the pile I cut off or from the top of the pile that
          remained, if that makes sense. It allowed me to miss by one and still
          seemingly get it right 
          </p>
          <p>
          Now, for the truly obsessed advanced student (and I have every
          faith that you are well on your way to becoming one), the following
          test might appeal. Firstly, you need to have the coded images for
          cards very clearly in your mind so that you can run through the
          deck and conjure up each one in turn without thinking much about
          it. We won't worry about the positions of the cards. Now, remove
          five cards at random from a genuinely shuffled deck and put them
          away, without seeing what they are. Then deal through the balance
          of the deck, and for each card conjure up the picture but then mutilate it in some way. For example, the ace of spades Grim Reaper is
          cut up into bits with his own scythe; the boy dancing at the club
          Gack of clubs) is shot. Each mutilation should clearly destroy the
          thing in question. Now, once you have done this, you can then mentally run through all the card images in your head, a suit at a time.
          Those you did not destroy will stand out very clearly to you, thus
          you'll be· able to tell which cards have been removed. With practice,
          this can be a very impressive feat. 
          </p>

        </div>
      </section>
      </div>
    </Fragment>
  );
};

export default Introduction;
