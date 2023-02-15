import { Injectable } from '@nestjs/common';
const { getFirestore } = require('firebase-admin/firestore');
import { CreateUserDTO } from '../../dtos/create-user.dto';

@Injectable()
export class UserService {

  async addUser(createUserDto: CreateUserDTO): Promise<string> {
    const db = getFirestore();
    const res = await db.collection('users').doc(createUserDto.id.toString()).set(createUserDto);
    console.log(res);
    return 'created';
  }
}
