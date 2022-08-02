---
sidebar: auto
---

# Overview

## Dice Rolls

- Base Dice: Attribute + Skill + Gear.
  - A 6 is a success. Each additional 6 can be used to do a Stunt.
- Stress Dice: Stress level
  - A 1 on a Stress Dice triggers a [Panic Roll](#panic-roll) which may cancel action
- Roll: Roll your Base Dice and Stress dice and check the result
- Pushing: If no 1s show on Stress Dice, you may add 1 STRESS LEVEL (and the associated die) then reroll all non-6s.
- Difficulty Modifiers: Adjust # of dice (Base Dice first, then Stress Dice).

### Ranged Combat Rolls

- Collect Dice
  - Attacker collects dice for Ranged Combat skill
  - Add dice for Agility stat
  - Add stress dice for stress level
  - Add bonus dice from Weapon / equipment if any
  - Add / remove dice for Range
  - Add / remove dice for Target Size
  - Add 2 dice if Aiming
  - Apply any weapon benefit
    - If Armor Peircing
      - Armor Rating of defence die reduced by half
    - If using Full Auto
      - Add 2 dice to Dice Pool
      - Increase Stress Level by 1
      - Add additional Stress Dice to Dice Pool
- Roll to hit
  - Rolled no successes
    - Push Yourself or miss
  - Rolled one or more successes
    - Attacker finds their weapon's Damage Rating
    - Spend any additional successes on [Ranged Combat Stunts](#attributes-and-skills)
    - If Full Auto
      - You can spend any additional successes on secondary targets within Short range of the primary target
      - The first success to a secondary taget inficts damage to it equal to the Damage Rating of the weapon
      - Further successes to a secondary target can be used for stunts
    - Sum up damage dealt
- Roll defence
  - Defender collects dice for their Armor Rating if any
  - Add dice for their Cover Rating if any
  - Roll defense pool
  - Reduce damage dealt by number of successes
  - Apply damage to defender
- Check Ammo
  - Attacker check if they rolled any 1s on their Stress Die
    - Their magazine is now empty and must be reloaded before firing again
    - Reduce number of full magazines in inventory

### Close Combat Rolls

- Collect Dice
  - Attacker must be Standing and at Engaged range
  - Defender declares if they are blocking
    - If unarmed can only block humans
  - Attacker collects dice for Close Combat skill
  - Add dice for Strength stat
  - Add stress dice for stress level
  - Add bonus dice from Weapon / equipment if any
  - Apply any weapon benefit
    - If Armor Peircing
      - Armor Rating of defence die reduced by half
- Roll to hit
  - Rolled no successes
    - Push Yourself or miss
  - Rolled one or more successes
    - Attacker finds their weapon's Damage Rating
    - Spend any additional successes on [Close Combat Stunts](#attributes-and-skills)
  - Sum up damage dealt
- Roll defence
  - Defender collects dice for their Armor Rating if any
  - If blocking
    - Add dice for Close Combat skill
    - Add dice for Strength stat
  - Roll defense pool
  - Reduce damage dealt by number of successes
  - Apply damage to defender

## Attributes and Skills

<table>
<tr><th>Skill</th><th>Stunts</th></tr>
<tr><td colspan="2" style="text-align:center"><strong>Strength</strong></td></tr>
<tr><td>Heavy Machinary</td><td><ul><li>+1 to a later related roll</li><li>Don’t need to roll again for this exact situation</li><li>Half the usual time</li><li>Break it permanently</li><li>You act quietly</li><li>You show off</li></ul></td></tr>
<tr><td>Stamina</td><td><ul><li>Give one 6 to someone in the same situation</li><li>+1 to later related roll</li><li>Don’t need to roll again for this exact situation</li><li>You impress someone</li></ul></td></tr>
<tr><td>Close Combat</td><td><ul><li>Attack
<ul><li>+1 damage</li> <li>Swap initiative card with opponent</li> <li>Opponent drops held item or weapon</li> <li>Pull object from target</li> <li>Grapple opponent</li> <li>Humanoid opponent prone</li> <li>Humanoid opponent clinched</li></ul></li> <li>Defence
<ul><li>-1 damage</li> <li>Counterattack: base damage only</li> <li>Disarm attacker</li></ul></li></ul></td></tr>
<tr><td colspan="2" style="text-align:center"><strong>Agility</strong></td></tr>
<tr><td>Mobility</td><td><ul><li>Give one 6 to someone in similiar situation</li><li>+1 to later related roll</li><li>Impress someone</li></ul></td></tr>
<tr><td>Ranged Combat</td><td><ul><li>+1 damage</li><li>Swap initiative card with opponent</li><li>Opponent makes Panic Roll</li><li>Opponent drops held item/weapon</li><li>Opponent prone or pushed back</li><li>(Auto fire only) Additional target hit for base damage</li></ul></td></tr>
<tr><td>Piloting</td><td><ul><li>+1 to later related roll</li><li>You show off</li></ul></td></tr>
<tr><td colspan="2" style="text-align:center"><strong>Wits</strong></td></tr>
<tr><td>Observation</td><td><ul><li>Is it coming for me?</li><li>Are there more of them close by?</li><li>How do I get in/past/away?</li></ul></td></tr>
<tr><td>Comtech</td><td><ul><li>+1 to a later related roll</li><li>Don't need to overcome again</li><li>Half the usual time</li><li>New/unexpected information</li><li>Hide your tracks</li><li>You show off</li></ul></td></tr>
<tr><td>Survival</td><td><ul><li>Give one 6 to someone in the same situation</li><li>+1 to later related roll</li><li>You impress someone</li></ul></td></tr>
<tr><td colspan="2" style="text-align:center"><strong>Empathy</strong></td></tr>
<tr><td>Command</td><td><ul><li>+1 to target's roll to carry out order</li></ul></td></tr>
<tr><td>Manipulation</td><td><ul><li>Target doesn't demand return favour</li><li>Does more than asked for</li><li>Is impressed by you; will help later</li></ul></td></tr>
<tr><td>Medical Aid</td><td><ul><li>Recover +1 Health points</li></ul></td></tr>
</table>

## Combat

Once enemy is revealed stealth mode is over and combat begins.

1. Determine initative
   - do this before anyone rolls dice except for sneak attack
2. Shuffle initiative cards
3. Draw cards for every PC and NPC
   - PCs and NPCs are given card per point of speed. Humans have speed of 1
   - If more than 10 then group NPCs
   - PC can swap initiative cards at beginning or end of round
4. Round begins each participant act in ascending initiative order
5. On your act perform either
   - one slow action and one fast action
   - two fast actions
6. On another participant act you can perform a reaction
   - but this uses up your actions for this round
7. Once every participant has acted a new round begins

### Slow actions

| Actions               | Prerequiste                                     | Skill         | Description                                                                          |
| --------------------- | ----------------------------------------------- | ------------- | ------------------------------------------------------------------------------------ |
| Break grapple         | Grapped                                         | Close Combat  | Roll opposed Close Combat                                                            |
| Crawl                 | You are prone                                   | -             |
| Close combat          | -                                               | Close Combat  | See [Close Combat Rolls](#close-combat-rolls)                                        |
| Climb into space suit | Space Suit                                      | Mobility      |
| First aid             | Broken or dying victim                          | Medical Aid   | See [Medical Aid](#damage-and-healing)                                               |
| Full auto             | Firearm with Fully Automatic                    | Ranged Combat | See [Ranged Combat Rolls](#ranged-combat-rolls)                                      |
| Give orders           | Character can hear you                          | Command       | See [Command Rolls](#attributes-and-skills)                                          |
| Persuade              | Your opponent can hear you                      | Manipulation  |
| Reload                | Firearm (rolled 1 on stress dice when shooting) | -             |
| Shoot firearm         | Firearm                                         | Ranged Combat | See [Ranged Combat Rolls](#ranged-combat-rolls)                                      |
| Use Signature Item    | Use Signature Item                              | -             |
| Start engine          | Vehicle                                         | -             |
| Stop panic            | Panicking character                             | Command       | See [Command Rolls](#attributes-and-skills)                                          |
| Throw weapon          | Thrown Weapon                                   | Ranged Combat | Mod. with aiming, range, target size. Inflict damage equal to weapon's Damage Rating |

### Fast actions

| Actions                    | Prerequiste                 | Skill        | Description                                                                                                            |
| -------------------------- | --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Aim                        | Ranged Weapon               | -            |
| Block attack               | Attacked in close combat    | Close Combat | Declare before opponent's Attack Roll, [spend successes](#blocking). Cannot use if already spent all actions this turn |
| Draw weapon                | -                           | -            |
| Drive                      | Vehicle                     | Piloting     |
| Enter/exit vehicle         | Vehicle                     | -            |
| Get up                     | You are prone               | -            |
| Grab the wheel             | Vehicle                     | -            |
| Grapple attack             | You've grappled an opponent | Close Combat | Cannot be blocked                                                                                                      |
| Move through door / hatch  | -                           | -            |
| Open unlocked door / hatch | -                           | -            |
| Pick up item               | -                           | -            |
| Retreat / disengage        | Enemy at Engaged range      | Mobility     | Success move to short range. Fail move to short range but enemy gets free attack                                       |
| Run                        | No enemy at Engaged range   | -            |
| Shove                      | Enemy at Engaged range      | Close Combat | Success opponent moved to short range.                                                                                 |
| Take cover                 | Cover in same zone          | -            |
| Set overwatch              | Ranged Weapon               | -            | Hold an Ranged Attack See [Ranged Combat Rolls](#ranged-combat-rolls). You must keep your slow action to fire          |
| Use item                   | -                           | -            |

### Movement

- [Run](#fast-actions)
  - Run from one zone to a neighbouring zone or between **Short** and **Engaged** range from an enemy or PC in the same zone as you
    - Mobility roll required if moving into a Cluttered Zone
- [Crawl](#slow-actions)
  - Same as running however a Slow Action so can only do one per turn
  - Cramped zone, crawling is the only movement possible
- [Retreat](#fast-actions)
  - Must use Retreat action to move away from engaged enemy

### Blocking

- On success spend successes
  - Decrease Damage
    - decrease damage by 1 for each success spent. If no damage left enemy misses
  - Counter Attack
    - Deal damage equal to your weapon's Damage Rating. Cannot spend additional successes to increase damage of the counter attack
  - Disarm Enemy
- Unarmed Blocking
  - If unarmed can only block unarmed attacks from humans

## Stress and Panic

### Gain stress if

- You push a skill roll.
- You fire a burst of full auto fire (p. 62).
- You suffer one or more points of damage.
- You go without sleep, food, or water (p. 70).
- A Scientist in your team fails to ANALYZE something (p. 121).
- A member of your own crew attacks you.
- A person nearby is revealed to be an android.
- etc

### Reduce stress by

- Every full Turn spending resting in assumed safe area reduces stress by one. No other actions can be made
- Once per Act PC can interact with signature item in some way to reduce stress by 1

### Make a panic roll if

- You roll one or more 1s on your Stress Dice in a skill roll. If this happens, you can’t push the skill roll. Instead, roll for panic.
- You witness a friendly character suffering from a certain panic effect (see the Panic Result table).
- You are pinned down by a ranged attack.
- You suffer a critical injury.
- etc

### Panic Roll

Roll a D6, add your current STRESS LEVEL, and check the Panic table below.

### Stop panicing

Some effects of Panic Rolls last for one round others remain until

- Another charctater makes a Command action on them
- You are broken
- One turn passes

### Permament mental trauma

- If rolled 13 or higher on a Panic Role make an empathy role at the end of the session
  - Only roll skill do not add stat
- If successed develop a permanent mental trauma, roll on the table on p67

## Injury and Death

Core book - p98

- Health represents fatigue, bruises, cuts, broken bones (p98)
- Critical Injury are more dangerous (p100)

### Damage and Healing

- Broken
  - Occurs when health reaches zero
  - Being Broken does not kill you
  - Cannot perform actions only crawl and mumble
  - Roll for Critical Injury
  - Further damage causes another critical injury
- Recovery
  - When not broken regain one point of health per Turn of rest
  - When broken and on your own you regain 1 point of Health after one Turn
    - If recover one Health by yourself you can try to treat yourself with Medical Aid (-2 mod)
- Medical Aid
  - Medical Aid can only be used if you are broken or have a critical injury
  - Medical Aid can be used to regain health - regaining Health equal to the successes
  - You can recover all Health Points but still have a critical injury
  - If you are broken and have a critical injury two Medical Aid rolls are required - one doesn't cure both

### Critical Injury and Death

Roll D66 on the Critical Injury table - Core book - p100. Synthetic critical Injuries Starter Set p77

- Death Roll
  - Make a death roll when suffer a critical injury listed as fatal when the listed time runs out - roll Stamina attribute only no stress dice
    - Success you linger on for the Time Limit of the injury before making another roll
    - Fail you die
- Save a life
  - Medical Aid can be given before a failed Death Roll
    - Each character who tries to treat you can only do so once, retry requires better medical equipment
  - If recover one Health by yourself you can try to treat yourself (-2 mod)

## Synthetics

- Rolls - Cannot push skill roles or have stress die
- Panic - Do not suffer stress and never make panic roles
- Damage - Critical injury roll on Synthetic Critical Injury table Starter Set - 77p
- Repairs - Do not heal and can't repair themselves. Shift long work and a comtech roll to repair all damage and critical injuries
- Death - Don't make Death Rolls. They "die" from System Shutdown when rolled on Synthetic Critical Injury. Can use power source and Comtech roll to turn back on to communicate. Can then also repair in this state.
- Resources - Don't need air, food, water, or sleep. Immune to vacuum, cold, disease.
